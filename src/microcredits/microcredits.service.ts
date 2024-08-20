import { Injectable } from '@nestjs/common';
import { CreditCalculationService } from './services/credit-calculation.service';
import { MicrocreditRepository } from './repositories/microcredit.repository';
import { UserRepository } from 'src/users/repositories/user.repository';
import { User } from 'src/users/interfaces/user.interface';
import { Microcredit } from './interfaces/microcredit.interface';

@Injectable()
export class MicrocreditsService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly creditCalculationService: CreditCalculationService,
        private readonly microcreditRepository: MicrocreditRepository
    ) {}

    async applyForMicrocredit(userId: string, amount: number) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const interestRate = this.creditCalculationService.calculateInterestRate(user);
        const microcredit: Microcredit = {
            id: Date.now().toString(30),
            userId,
            amount,
            interestRate,
            status: 'PENDING'
        };
        this.microcreditRepository.addMicrocredit(microcredit);
        return microcredit;
    }
}