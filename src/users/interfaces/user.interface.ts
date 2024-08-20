import { FinancialRecord } from "./financial-record.interface";

export interface User {
    id: string,
    name: string,
    creditScore: number,
    financialHistory: FinancialRecord[];
}