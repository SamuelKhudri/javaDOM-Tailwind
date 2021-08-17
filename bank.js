document.getElementById('btn-sub1').addEventListener('click', function () {
    // console.log('clicked buttton');
    const mailfield = document.getElementById('user-mail1');
    const mailGet = mailfield.value;
    // // console.log(mailGet); get user password
    const passfield = document.getElementById('user-Pass1');
    const passGet = passfield.value;
    // console.log(passGet);
    if (mailGet == 'bapbeta@gmail.com' && passGet == '1234') {
        // console.log('valid user');
        window.location.href = 'deposit.html';

    }
})