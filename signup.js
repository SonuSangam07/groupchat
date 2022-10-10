function createUser(event) {
    event.preventDefault()

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let phonenumber=document.getElementById('number').value
    let userDetails = {
        name : name,
        email:email,
        
        password:password
    }
axios.post('http://localhost:3000/signup',userDetails)
.then(result=>{
   if(result.status ===201) {
    console.log(result)
   window.location.href='./login.html'
   console.log('done')
   } else {
    throw new Error ('Failed to Login')
   }
})
.catch(err=>{
    alert(err)
})
}