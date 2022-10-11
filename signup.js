async function  createUser(event) {
    event.preventDefault()
try{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let phonenumber=document.getElementById('number').value
    let userDetails = {
        name : name,
        email:email,
        
        password:password
    }
    axios.post('http://localhost:3000/signup', userDetails)
    .then((res)=>{
    

        alert(res.data.message);

    }).catch(err=>console.log(err))
}
catch(err){
    console.log(err)
}

}