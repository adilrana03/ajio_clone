import {display_login_modal,loginCheck,getUser,checkUser,createUser} from './login.js'

document.querySelector(".login-modal").addEventListener('click',displayModal)

function displayModal(){
    document.querySelector('#sign-in').innerHTML= display_login_modal()
    document.querySelector('form').addEventListener('submit',loginCheck)
    document.querySelector('.ic-close-quickview').addEventListener('click',()=>{
        document.querySelector('#sign-in').innerHTML=null
    })
}