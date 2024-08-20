import { Injectable, Inject } from "@nestjs/common";
import { InterestRateStrategy } from "../interfaces/interest-rate-strategy.interface";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class CreditCalculationService {
    constructor(@Inject('InterestRateStrategy') private readonly strategy: InterestRateStrategy) { }

    calculateInterestRate(user: User) {
        return this.strategy.calculate(user);
    }
}