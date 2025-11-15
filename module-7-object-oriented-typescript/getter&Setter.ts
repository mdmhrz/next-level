//access modifier


class BankAccounts {
    readonly userId: number;
    userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }


    //set the balance
    // addBalance(balance: number) {
    //     this.userBalance = this.userBalance + balance
    // }

    set addBalance(balance: number) {
        this.userBalance = this.userBalance + balance
    }

    // get balance
    get getBalance() {
        return this.userBalance
    }


}

const amarAccounts = new BankAccounts(111, 'Razu', 9999);

console.log(amarAccounts.getBalance);

amarAccounts.addBalance = 800;
console.log(amarAccounts.getBalance);