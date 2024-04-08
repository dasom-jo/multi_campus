const select_email = document.querySelector('#addrBox');
const input_acc = document.signupForm.emailAccount;
const input_addr = document.signupForm.emailAddr;

select_email.addEventListener('change', ()=>{
    console.log(select_email.value);
    if (select_email.selectedIndex > 0) {
        input_addr.value = select_email.value;
        input_addr.readOnly = true;
    } else {
        input_addr.value = '';
        input_addr.readOnly = false;
    }
})
