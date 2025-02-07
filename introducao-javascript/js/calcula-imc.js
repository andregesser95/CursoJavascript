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

    var ehPesoValido = validaPeso(peso);
    var ehAlturaValida = validaAltura(altura);

    if (!ehPesoValido) {
        console.log("Peso inválido!");
        ehPesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (!ehAlturaValida) {
        console.log("Altura Inválida!");
        ehAlturaValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (ehPesoValido && ehAlturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}