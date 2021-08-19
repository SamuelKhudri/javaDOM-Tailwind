// console.log('munira');
document.getElementById('btn-sub1').addEventListener('click', function () {
    // console.log('button clicked');
    const takeEmail = document.getElementById('user-mail1');
    const getEmailValue = takeEmail.value;
    // console.log(getValue);
    const takePass = document.getElementById('user-Pass1');
    const getPassValue = takePass.value;
    // console.log(getPassValue);
    if (getEmailValue == 'sakur@email.com' && getPassValue == 1234) {
        window.location.href = 'deposit.html';
    }
});