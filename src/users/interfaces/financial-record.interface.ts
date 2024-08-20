export interface FinancialRecord {
    date: Date,
    amount: number,
    type: 'income' | 'expense',
    description: string
}