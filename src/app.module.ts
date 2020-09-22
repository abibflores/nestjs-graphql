import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TournamentModule } from './tournament/tournament.module';


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
    TournamentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
