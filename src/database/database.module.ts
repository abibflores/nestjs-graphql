import { databaseProviders } from './database.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}
