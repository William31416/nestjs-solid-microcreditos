import { Injectable } from "@nestjs/common";
import { InterestRateStrategy } from "../interfaces/interest-rate-strategy.interface";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class StandardInterestRateStrategy implements InterestRateStrategy {
    calculate(user: User): number {
        // Lógica estándar para calcular la tasa de interés.
        return user.creditScore > 700 ? 5 : 15
    }
}