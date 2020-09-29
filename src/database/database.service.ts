import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from 'src/config/config.keys';
import { ConfigModule } from 'src/config/config.module';
import { ConnectionOptions } from 'typeorm';
import { ConfigService } from "../config/config.service";

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return {
                ssl: false,
                type: "mysql",
                host: config.get(Configuration.HOST),
                port: 8889,
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                database: config.get(Configuration.DATABASE),
                autoLoadEntities: true,
                synchronize: true,
            } as ConnectionOptions
        }
    })
];