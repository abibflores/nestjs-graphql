import { HttpModule, Module } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { OptaService } from "./opta.service";


@Module({
  imports: [HttpModule],
  providers: [OptaService, ConfigService]
})
export class OptaModule {}
