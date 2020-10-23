import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SharedModule } from './../../shared/shared.module';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepository]), SharedModule, AuthModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
