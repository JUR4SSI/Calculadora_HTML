
function olamundo() {
    console.log("Olá Mundo!");
}

let operadores = [];
let operandos = [];

let resultadoCalculado = false;
let novoNumero = true;

// Digitar números
function numeroPressionado(num) {
    let display = document.querySelector("#display");

    if (resultadoCalculado || novoNumero || display.innerHTML === "Erro") {
        display.innerHTML = num;
        resultadoCalculado = false;
        novoNumero = false;
    } else {
        display.innerHTML += num;
    }
}

// Digitar números decimais
function decimalPressionado() {
    let display = document.querySelector("#display");

    if (resultadoCalculado || novoNumero || display.innerHTML === "Erro") {
        display.innerHTML = "0.";
        resultadoCalculado = false;
        novoNumero = false;
    } else if (!display.innerHTML.includes(".")) {
        display.innerHTML += ".";
    }
}

// Escolher operação
function operadorPressionado(operador) {
    let display = document.querySelector("#display");

    if (display.innerHTML === "Erro") {
        return;
    }

    if (operadores.length > 0) {
        if (novoNumero) {
            operadores[0] = operador;
            return;
        } else {
            calcular();
        }
    }

    operandos.push(display.innerHTML);
    operadores.push(operador);

    novoNumero = true;
    resultadoCalculado = false;
}

// Calcular resultado
function calcular() {
    let display = document.querySelector("#display");

    if (operadores.length === 0 || operandos.length === 0 || novoNumero) {
        return;
    }

    let primeiro = Number(operandos.pop());
    let segundo = Number(display.innerHTML);
    let operador = operadores.pop();

    let resultado;

    if (operador === "+") {
        resultado = primeiro + segundo;
    } else if (operador === "-") {
        resultado = primeiro - segundo;
    } else if (operador === "*") {
        resultado = primeiro * segundo;
    } else if (operador === "/") {
        if (segundo === 0) {
            display.innerHTML = "Erro";
            operadores = [];
            operandos = [];
            resultadoCalculado = true;
            novoNumero = true;
            return;
        }

        resultado = primeiro / segundo;
    }

    display.innerHTML = Number(resultado.toFixed(10));

    operadores = [];
    operandos = [];

    resultadoCalculado = true;
    novoNumero = true;
}

// Limpar calculadora
function limpar() {
    let display = document.querySelector("#display");

    display.innerHTML = "0";

    operadores = [];
    operandos = [];

    resultadoCalculado = false;
    novoNumero = true;
}

// Apagar último dígito
function apagar() {
    let display = document.querySelector("#display");

    if (display.innerHTML === "Erro") {
        limpar();
        return;
    }

    resultadoCalculado = false;
    novoNumero = false;

    if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        display.innerHTML = "0";
    }
}

// Porcentagem
function porcentagem() {
    let display = document.querySelector("#display");

    if (display.innerHTML === "Erro") {
        return;
    }

    let eraResultado = resultadoCalculado;

    display.innerHTML = Number(display.innerHTML) / 100;

    resultadoCalculado = eraResultado;
    novoNumero = eraResultado;
}

// Trocar sinal do número
function trocarSinal() {
    let display = document.querySelector("#display");

    if (display.innerHTML === "Erro" || Number(display.innerHTML) === 0) {
        return;
    }

    let eraResultado = resultadoCalculado;

    display.innerHTML = Number(display.innerHTML) * -1;

    resultadoCalculado = eraResultado;
    novoNumero = eraResultado;
}

// Raiz quadrada
function raizQuadrada() {
    let display = document.querySelector("#display");

    if (display.innerHTML === "Erro") {
        return;
    }

    let numero = Number(display.innerHTML);

    if (numero < 0) {
        display.innerHTML = "Erro";
        operadores = [];
        operandos = [];
        resultadoCalculado = true;
        novoNumero = true;
        return;
    }

    let eraResultado = resultadoCalculado;

    display.innerHTML = Number(Math.sqrt(numero).toFixed(10));

    resultadoCalculado = eraResultado;
    novoNumero = eraResultado;
}
