async function login(event) {
    try{
    event.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
let logindetails = {
    email : email,
    password: password
}

const data=await axios.post('http://localhost:3000/login',logindetails)

   if(data.status==200){
    localStorage.setItem('token',data.data.token)
    alert(data.data.message)
    window.location.href='./message.html'
   }
   else{
    alert(data.data.message)
   } 
}
   catch(err){
    document.body.innerHTML+=`<div style="color:red;">${err.message}</div>:`
alert(err);
   }}