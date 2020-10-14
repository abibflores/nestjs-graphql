import { Tournament } from './../modules/tournament/entities/tournament.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from 'src/config/config.keys';
import { ConfigModule } from 'src/config/config.module';
import { ConnectionOptions } from 'typeorm';
import { ConfigService } from "../config/config.service";

import { User } from "../modules/user/user.entity";
import { UserDetails } from './../modules/user/user.details.entity';
import { Role } from './../modules/role/role.entity';

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
                entities: [User, UserDetails, Role, Tournament],
                synchronize: true
            } as ConnectionOptions
        }
    })
];