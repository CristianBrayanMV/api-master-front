window.onload = () => {
    const form = document.querySelector(".login__form");
    const input = document.querySelectorAll(".login__input");
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("buscando api...");
    });
    input.forEach((i) => {
       i.addEventListener("input", validaInput);
       i.addEventListener("blur", validaInput);
    });
    
}

function validaInput(e) {
    e.preventDefault();
    e.target.value=e.target.value.trim()
   if(!e.target.value){
       e.target.nextElementSibling.nextElementSibling.classList.remove("login__field-validate");
       if(!e.target.classList.contains("login__input--invalidate")){
           const alerta = document.createElement("span");
           e.target.classList.add("login__input--invalidate");
           alerta.appendChild(document.createTextNode(`El ${e.target.name} es obligatorio`));
           alerta.classList.add("login__invalidate");
           e.target.parentElement.appendChild(alerta);
       }
    }else{
       e.target.nextElementSibling.nextElementSibling.classList.add("login__field-validate");
       if(e.target.classList.contains("login__input--invalidate")){
           e.target.classList.remove("login__input--invalidate");
           e.target.parentElement.lastChild.remove();          

       }
       
   }
        
}