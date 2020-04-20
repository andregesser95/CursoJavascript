//busca pelos seletores css é uma boa prática e não por tags
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var ehPesoValido = true;
    var ehAlturaValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        ehPesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log("Altura Inválida!");
        ehAlturaValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido")
    }
    
    if (ehPesoValido && ehAlturaValida) {
        var imc = peso / (altura * altura); // 100 / (2.0 * 2.0) = 100 / 4 =>>>> 25
        tdImc.textContent = imc.toFixed(2);
    }
    
}

titulo.addEventListener("click", function () {
    console.log("olá só posso chamar uma função anonima.");
});

function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}