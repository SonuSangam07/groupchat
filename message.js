function sendmsg(event) {
  event.preventDefault();
  let message = document.getElementById("message").value;
  let obj = {
    message: message,
  };
  const token = localStorage.getItem("token");
  axios
    .post("http://localhost:3000/sendmsg", obj, {
      headers: { Authorization: token },
    })
    .then((response) => {
      alert("Message Sent");
    })
    .catch((err) => {
      console.log(err);
    });
}

// retrieving messages

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  axios
    .get("http://localhost:3000/getmessages")
    .then((response) => {
      if (response.status == 200) {
        console.log(response)
        let inbox = document.getElementById('inbox')
        
        let content1=`<div>you joined </div`
          inbox.innerHTML+=content1;
        for (let i = 0; i < response.data.data.length; i++) {
          let message = response.data.data[i].message;
          let id = response.data.data[i].name
          
         let content = `<div class="info"><span class="allmsgs">${id} :</span><span class="allmsgs">${message}</span></div>`
         inbox.innerHTML += content
        }
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});