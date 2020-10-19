import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SigninDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly _authService: AuthService,
    ){}
    
    @Post()
    @UsePipes(ValidationPipe)
    async signup(@Body() signupDto: SignupDto): Promise<void>{
        return this._authService.signup(signupDto);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: SigninDto) {
        return this._authService.signin(signinDto);
    }
}
