import { Configuration } from 'src/config/config.keys';
import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class OptaService {
    constructor(private httpService: HttpService, private configService: ConfigService) {}

    async getToken() {
        const END_POINT = this.configService.get(Configuration.OPTA_TOKEN_URL);
        const response = await this.httpService.get(END_POINT).toPromise();
        
        return response.data;
      }
}
