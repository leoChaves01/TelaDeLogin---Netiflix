document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    let email = document.querySelector("input[type='email']").value;
    let senha = document.querySelector("input[type='password']").value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
    } else {
        alert("Entrando...");
    }
});
