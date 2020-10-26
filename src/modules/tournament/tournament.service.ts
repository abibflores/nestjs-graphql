import { Injectable, HttpService } from '@nestjs/common';
import { OptaService } from '../opta/opta.service';

@Injectable()
export class TournamentService {
    constructor(private optaServive: OptaService, private httpService: HttpService) {}

    async allTournaments() {
        const { access_token } = await this.optaServive.getToken();        
        const END_POINT = "https://api.performfeeds.com/soccerdata/tournamentcalendar/hmn8ynab00w21taowkvnk00w1/authorized?_fmt=json&_rt=b&stages=yes"
        const response = await this.httpService.get(END_POINT, { headers: { Authorization: `Bearer ${access_token}` } }).toPromise();
        
        return response.data.competition;
      }

}
