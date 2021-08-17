// < 
//         <div id="container" class="grid grid-cols-3 gap-4 ">
//         <div class="bg-green-300 py-4 rounded my-4">
//         <h2 class="text-white text-3xl">Deposit</h2>
//         <h1 class="text-white text-4xl font-bold">$<span id="total-deposit">000</span> </h1>
//         </div>
//        <div class="bg-yellow-300 py-4 rounded my-4">
//         <h2 class="text-white text-3xl">Withdraw</h2>
//         <h1 class="text-white text-4xl font-bold">$<span id="totalWithdraw">000</span> </h1>
//         </div>
//         <div class="bg-blue-300 py-4 rounded my-4">
//         <h2 class="text-white text-3xl">Balance</h2>
//         <h1 class="text-white text-4xl font-bold">$<span id="balance">1200</span> </h1>
//         </div>


    //     </div>

    //    <div class="grid grid-cols-2 gap-4 ">
    //      <div class="bg-red-400 p-4 py-10 rounded shadow-2xl">
    //     <h1 class="text-3xl py-2 mb-2 font-bold">Please Deposit</h1>
    //     <input id="deposit-input" class="w-4/5 px-2 py-2" type="text " placeholder="$ deposit amount">
    //     <button id="deposit-button" class="block mx-auto bg-blue-600 rounded  px-4 py-2 my-4 text-white font-bold">Deposit</button>
    //     </div>

    //     <div class="bg-pink-600 p-4 py-10 rounded shadow-2xl">
    //     <h1 class="text-3xl py-2 mb-2 font-bold">Please Withdraw</h1>
    //     <input id="withdrawInput" class="w-4/5 px-2 py-2" type="text " placeholder="$ withdraw amount">
    //     <button id="withdraw" class="block mx-auto bg-purple-600 rounded  px-4 py-2 my-4 text-white font-bold">Withdraw</button>
    //     </div>


    //     </div>
        //  <div>
        // <button id="previousPage" class="block mx-auto bg-red-400 hover:bg-red-600 rounded  px-4 py-2 my-4 text-white font-bold">Back To Previous Page</button>
        // </div>


    </section>


    <script>
            function getInputValue(inputId) {
            const inputField = document.getElementById(inputId);
            const inputFieldText = inputField.value;
            const inputAmount = parseFloat(inputFieldText);
            inputField.value = '';
            return inputAmount;
        }
                            
        function totalUpdateField(totalFieldId, depositMoney) {
            const totalDeposit = document.getElementById(totalFieldId);
            const TotalDepositAmount = totalDeposit.innerText;
            const TotalDepositMoney = parseFloat(TotalDepositAmount);
            const newDepositMoney = depositMoney + TotalDepositMoney;
            totalDeposit.innerText = newDepositMoney;
        }
                            
        function currentBalance() {
            const Amount = parseFloat(balance.innerText);
            return Amount;
         }
                            
        function updateBalance(MoneyBalance, isAdd) {
            const balance = document.getElementById('balance');
             // const balanceAmount = parseFloat(balance.innerText);
            const balanceAmount = currentBalance();
            if (isAdd == true) {
            const totalBalance = balanceAmount + MoneyBalance
            balance.innerText = totalBalance;
            } 
            else {
            const totalBalance = balanceAmount - MoneyBalance
            balance.innerText = totalBalance;}
                        
        }
                        
        document.getElementById('deposit-button').addEventListener('click', function() {

        const depositMoney = getInputValue('deposit-input');
            if (depositMoney > 0) {
                totalUpdateField('total-deposit', depositMoney);
                const depoBalanceUpdate = updateBalance(depositMoney, true);
            } 
            else {
                    alert('please enter the valid number');}
                        
            // deposit.value = '';
        })
                        
        document.getElementById('withdraw').addEventListener('click', function() {

        const withdrawMoney = getInputValue('withdrawInput');
        const balanceAmount = currentBalance();
           
        if (withdrawMoney > 0 && withdrawMoney <= balanceAmount) {
            totalUpdateField('totalWithdraw', withdrawMoney);
            const withBalanceUpdate = updateBalance(withdrawMoney, false);
            } 
            else 
            {
            alert('please enter the valid number');
                }
                        
                        
         // withdrawInput.value = '';
                        
        })
                        
        document.getElementById('previousPage').addEventListener('click', function() {
                                            window.location.href = 'index.html';
                                    })
    </script>
</body>

</html>