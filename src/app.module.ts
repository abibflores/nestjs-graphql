import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TournamentModule } from './modules/tournament/tournament.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { AuthModule } from './modules/auth/auth.module';



@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true
    }),
    TournamentModule,
    ConfigModule,
    DatabaseModule,
    UserModule,
    RoleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
