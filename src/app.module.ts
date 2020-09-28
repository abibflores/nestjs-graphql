import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TournamentModule } from './tournament/tournament.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 8889,
      username: 'abibflores',
      password: '123456',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true
    }),
    TournamentModule,
    ConfigModule,
    DatabaseModule,
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
