'use strict';
const input = document.querySelectorAll('.input');
const btn_claim = document.querySelector('.btn_claim');
const logo_error = document.querySelectorAll('.error');
const msg_error = document.querySelectorAll('.msg_error');

const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn_claim.addEventListener('click', () => {
    for (let i = 0; i < input.length; i++) {
        if(input[i].value === "") {
            input[i].style.marginBottom = "8px";
            logo_error[i].style.display = "block";
            msg_error[i].style.display = "block";
        } else {
            if (i === 2) {
                if(validation.test(input[i].value)) {
                    console.log('Email validation');
                    msg_error[i].style.display = 'none';
                    logo_error[i].style.display = 'none';
                    input[i].style.marginBottom = "20px";
                } else {
                    input[i].style.marginBottom = "8px";
                    msg_error[i].style.display = 'block';
                    logo_error[i].style.display = "block";
                }
            } else {
                input[i].style.marginBottom = "20px";
                logo_error[i].style.display = "none";
                msg_error[i].style.display = "none";
            }
        }
    }
    console.log('Datos Validados');
});
/* <div class="error"></div>
<p class="msg_error">First Name cannot be empty</p> */