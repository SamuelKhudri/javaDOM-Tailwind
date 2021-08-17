// take deposit button to take the balance value

document.getElementById('btn-depo1').addEventListener('click', function () {
    const depfield = document.getElementById('user-depo1');
    const getDepfield = depfield.value;
    // console.log(getDepfield);
    // add deposit input
    const inpDepofield = document.getElementById('inp-depo1');
    // add previous money on depo
    const inpCurrentDepo = inpDepofield.innerText;
    const inpDepoTotal = parseFloat(inpCurrentDepo) + parseFloat(getDepfield);
    // tumi alada var er vetore parse flot kre add krte paro.
    inpDepofield.innerText = inpDepoTotal;
    depfield.value = '';

    // add depo money in the balance
    const withInpBal = document.getElementById('inp-balance');
    // console.log(withInpBal)
    const preInpBal = withInpBal.innerText;
    const preInpBalpar = parseFloat(preInpBal);
    const withTotBal = preInpBalpar + parseFloat(getDepfield);
    withInpBal.innerText = withTotBal;

});
// withdraw money add kora
document.getElementById('btn-with1').addEventListener('click', function () {
    const withfield = document.getElementById('user-with1');
    const getWithfield = withfield.value;
    // console.log(getWithfield);
    const inpWithfield = document.getElementById('inp-with1');
    // add money---------------
    const inpCurrentWith = inpWithfield.innerText;
    const inpWithTotal = parseFloat(inpCurrentWith) + parseFloat(getWithfield);
    inpWithfield.innerText = inpWithTotal;
    withfield.value = '';

    // update balance in Blance
    const inpBalfield = document.getElementById('inp-balance');
    // console.log('inpBalfield');
    const preBal = inpBalfield.innerText;
    // console.log(preBal);
    const preBalpar = parseFloat(preBal);
    const inpTotBal = preBalpar - parseFloat(getWithfield);
    // console.log(inpTotBal);
    inpBalfield.innerText = inpTotBal;

});