import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TournamentModule } from './tournament/tournament.module';
import { GraphQLModule } from '@nestjs/graphql';



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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
