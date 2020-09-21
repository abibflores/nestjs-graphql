import { Controller, Get } from '@nestjs/common';

@Controller('tournament')
export class TournamentController {

    @Get("authorized")
    findAuthorized(): string {
        return 'This action returns all tournaments';
    }
}
