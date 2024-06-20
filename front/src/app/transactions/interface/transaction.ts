export interface Transaction {
    id : number;
    type : String;
    source: String;
    destination: String;
    amount: number;
    category: String;
    description: String;
    status: String;
    balance: String;
    date: string;
}
