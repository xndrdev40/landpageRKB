const nameClient = document.getElementById("name-client")
const telClient = document.getElementById("tel-client")
const emailClient = document.getElementById("email-client")

const form = document.getElementsByTagName("form")

nameClient.addEventListener("input", function(){
  this.value = this.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "")
})

telClient.addEventListener("input", function(){
  this.value = this.value.replace(/\D/g, "")
})

emailClient.addEventListener("input", function(){
  this.value = this.value.replace(/[^a-zA-Z0-9@._%+-]/g, "")
})

addEventListener("submit", async (event) =>{
  event.preventDefault()  
  
await  fetch("https://xndrdev40.github.io/lead_api/server.json", {
    method: "POST",
    headers:{
      "content-Type": "application/json"
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: nameClient.value,
      telefone: telClient.value,
      email: emailClient.value,
    }),
  })


  nameClient.value= ""
  telClient.value = ""
  emailClient.value = ""
  alert("DADOS ENVIADO COM SUCESSO")
})


