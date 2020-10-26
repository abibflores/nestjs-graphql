import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";
import { OptaService } from "./opta.service";


@Module({
  imports: [HttpModule, ConfigModule],
  providers: [OptaService, ConfigService]
})
export class OptaModule {}
