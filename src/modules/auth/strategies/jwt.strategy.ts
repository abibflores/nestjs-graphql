import { IJwtPayload } from './../jwt-payload.interface';
import { AuthRepository } from './../auth.repository';
import { Configuration } from './../../../config/config.keys';
import { ConfigService } from './../../../config/config.service';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly _configService: ConfigService, private readonly _authRepository: AuthRepository){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _configService.get(Configuration.JWT_SECRET),
        });
    }

    async validate(payload: IJwtPayload) {
        const { username } = payload;
        const user = await this._authRepository.findOne(username, {where: { status: "ACTIVE"}});

        if(!user) {
            throw new UnauthorizedException();
        }

        return payload;
    }
}