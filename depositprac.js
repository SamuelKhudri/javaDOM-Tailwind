// console.log('muniraa')
document.getElementById('btn-depo1').addEventListener('click', function () {
    // console.log('love u')
    const takedepoInp = document.getElementById('user-depo1');
    const getdepoValue = takedepoInp.value;
    // console.log(getdepoValue);
    // take the upper section depo to deposit

    const takeFinDepInp = document.getElementById('inp-depo1');
    const pushDepField = takeFinDepInp.innerText;
    const finalDep = parseFloat(pushDepField) + parseFloat(getdepoValue);
    takeFinDepInp.innerText = finalDep;
    // push depo money to the main balance

    const takeBalInp = document.getElementById('inp-balance');
    // takeBalInp.innerText = getdepoValue;
    const getBalValue = takeBalInp.innerText;
    const getBalValuePar = parseFloat(getBalValue);
    const TolBalWithDepo = getBalValuePar + parseFloat(getdepoValue);
    takeBalInp.innerText = TolBalWithDepo;



    // clear value
    takedepoInp.value = '';
});

document.getElementById('btn-with1').addEventListener('click', function () {
    // console.log('love u')
    const takeWithInp = document.getElementById('user-with1');
    const getWithValue = takeWithInp.value;
    // console.log(getWithValue);
    // take the upper section with to withdraw

    const takeFinWithInp = document.getElementById('inp-with1');
    const pushWithField = takeFinWithInp.innerText;
    const finalWith = parseFloat(pushWithField) + parseFloat(getWithValue);
    takeFinWithInp.innerText = finalWith;
    // clear value
    takeWithInp.value = '';
    // cut withdraw money from totall balance

    const takeBalInpW = document.getElementById('inp-balance');
    // takeBalInp.innerText = getdepoValue;
    const getBalValueW = takeBalInpW.innerText;
    const getBalValueWPar = parseFloat(getBalValueW);
    const TolBalWithW = getBalValueWPar - parseFloat(getWithValue);
    takeBalInpW.innerText = TolBalWithW;


});