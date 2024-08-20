import { User } from "src/users/interfaces/user.interface";

export interface InterestRateStrategy {
    calculate(user: User): number;
}