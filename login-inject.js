import {display_login_modal,loginCheck,getUser,checkUser,createUser} from './login.js'

document.querySelector(".login-modal").addEventListener('click',displayModal)

function displayModal(){
    document.querySelector('#sign-in').innerHTML= display_login_modal()
    document.querySelector('form').addEventListener('submit',loginCheck)
    document.querySelector('.ic-close-quickview').addEventListener('click',()=>{
        document.querySelector('#sign-in').innerHTML=null
    })
}
let sign_id = localStorage.getItem('signin')
if(sign_id){
    let data = fetch(`https://ajio-json.onrender.com/users/${sign_id}`)
    data.then((res)=>{
        return res.json()
    }).then((res)=>{
        document.querySelector(".login-modal").innerHTML = res.email
    })
}
