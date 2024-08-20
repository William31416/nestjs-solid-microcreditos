import { Injectable } from "@nestjs/common";
import { InterestRateStrategy } from "../interfaces/interest-rate-strategy.interface";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class PremiumInterestRateStrategy implements InterestRateStrategy{
    calculate(user: User): number {
        // Lógica premium para calcular la tasa de interés.
        return user.creditScore > 700 ? 3 :10;
    }
}