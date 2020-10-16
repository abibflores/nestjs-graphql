import { RoleType } from './../role/roletype.enum';
import { IJwtPayload } from './jwt-payload.interface';
import { SignupDto } from './dto/signup.dto';
import { AuthRepository } from './auth.repository';
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { SigninDto } from './dto';
import { User } from '../user/user.entity';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
        private readonly _jwtService: JwtService,        
    ){}

    async signup(signupDto: SignupDto): Promise<void>{
        const { username, email } = signupDto;
        const userExist = await this._authRepository.findOne({where: [{username, email}]});

        if (userExist) {
            throw new ConflictException("usario o email ya existen");
        }

        return this._authRepository.signup(signupDto);
    }

    async signin(signinDto: SigninDto): Promise<{ token: string}>{
        const { username, password } = signinDto;

        const user: User = await this._authRepository.findOne({
            where: { username },
        });

        if (!user) {
            throw new NotFoundException("Este usario no existe");
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException("credenciales invalidas");
        }

        const payload: IJwtPayload = {
            id: user.id,
            email: user.email,
            username: user.username,
            roles: user.roles.map(r => r.name as RoleType),
        };

        const token = await this._jwtService.sign(payload);

        return { token };
    }
}
