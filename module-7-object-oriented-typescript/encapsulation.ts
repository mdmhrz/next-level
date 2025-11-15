{

    //access modifier


    class BankAccount {
        readonly userId: number;
        userName: string;
        private userBalance: number;

        constructor(userId: number, userName: string, userBalance: number) {
            this.userId = userId;
            this.userName = userName;
            this.userBalance = userBalance
        }

        addBalance(balance: number) {
            this.userBalance = this.userBalance + balance
        }


    }

    const amarAccount = new BankAccount(111, 'Razu', 9999);

    amarAccount.addBalance(1)
    console.log(amarAccount);


}