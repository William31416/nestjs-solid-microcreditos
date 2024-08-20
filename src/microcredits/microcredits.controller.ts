import { Controller, Post, Body } from '@nestjs/common';
import { MicrocreditsService } from './microcredits.service';

@Controller('microcredits')
export class MicrocreditsController {
    constructor(private readonly microcreditsService: MicrocreditsService) {}

    @Post()
    async applyForMicrocredit(@Body() body: any) {
        const userId = body.userId;
        const amount = body.amount;
        if (!userId || typeof userId !== 'string') {
            throw new Error('Invalid or missing userId');
        }
        if ( typeof amount !== 'number' || amount <= 0) {
            throw new Error('Invalid amount');
        }
        return this.microcreditsService.applyForMicrocredit(userId, amount);
    }
}
