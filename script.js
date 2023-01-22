const form = document.querySelector(".form");
const button = document.querySelector(".button");

//objeto da biblioteca disponibilizada
const nlwSetup = new NLWSetup(form);

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, 5);
    const dayExists = nlwSetup.dayExists(today);

    if (!dayExists) {
        alert("Dia adiconado com sucesso ✅");
        nlwSetup.addDay(today);
    } else {
        alert("O dia já foi adcionado ❌");
    }
}

function save() {
    //armazenando no localstorage. Primeiro argumento é uma chave e o segundo o texto a ser guardado
    localStorage.setItem("NLWSetup", JSON.stringify(nlwSetup.data));
}

//pegando os dados do local storage e armazena da variável data na forma de objeto. Caso não exista recebe um objeto vazio
const data = JSON.parse(localStorage.getItem("NLWSetup")) || {};
nlwSetup.setData(data); //colocando os dados no objeto
nlwSetup.load(); //renderiza o layout
