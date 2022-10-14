const token = localStorage.getItem('token');

window.addEventListener('DOMContentLoaded', (e) => {
    var sendbtn = document.getElementById('sendbtn');
    sendbtn.addEventListener('click', sendMsg);
    e.preventDefault();
    // setInterval(()=>{
    //     showMsg();
    // },1000);
     showMsg();
    
    

    
})


function sendMsg(){
    var msg = document.getElementById('msg').value;

        let msgDetails = {
            token: token,
            message: msg,
        }

        axios.post('http://localhost:3000/sendmsg', msgDetails , {
            headers: {"Authorization":token}
        })
        .then(() => {
            document.getElementById('msg').value = "";
        })
}

function showMsg(){
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/getmessages', {headers: {"Authorization":token}})
        .then(response => {
            //console.log(response.data.data)
            if(response.status === 200){
                document.getElementById('showMsg').innerHTML="";
                response.data.data.forEach(message => {
                    var parentElemnt = document.getElementById('showMsg');
                    var msgId = `${message.id}`;
                    //console.log(msgId);
                    parentElemnt.innerHTML += `
                    <div class="message" id=${msgId}>
                        <p class="meta">${message.Username}</p>
                        <p class="text">
                            ${message.message}
                        </p>
                    </div>`
                })
            }else{
                throw new Error();
            }
        })
}

// retrieving messages

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const token=localStorage.getItem('token')
  //console.log(token)
  axios
    .get("http://localhost:3000/getmessages",{headers: {"Authorization": token}})
    .then((response) => {
      if (response.status == 200) {
       // console.log(response.data.data)
      
        
        response.data.data.forEach(message => {
          var parentElemnt = document.getElementById('showMsg');
                    var msgId = `${message.id}`;
                    //console.log(msgId);
                    parentElemnt.innerHTML += `
                    <div class="message" id=${msgId}>
                        <p class="meta">${message.name}</p>
                        <p class="text">
                            ${message.message}
                        </p>
                    </div>`
        })
       
         } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  })

