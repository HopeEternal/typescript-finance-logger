class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('Eddy', 'worked on CandyCrush', 93);
const invTwo = new Invoice('Lotta', 'finished Zelda', 258);

console.log(invOne, invTwo);