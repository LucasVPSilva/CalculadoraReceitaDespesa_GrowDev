/* Desenvolva aqui a rotina */

// Receber valores de RECEITAS:

const valorBase = document.getElementById('valor_base');
const valorTransp = document.getElementById('valor_transporte');
const valorAliment = document.getElementById('valor_alimentacao');
const receitaTotal = document.getElementById('valor_receita');

valorBase.addEventListener('input', calcularTotal);
valorTransp.addEventListener('input', calcularTotal);
valorAliment.addEventListener('input', calcularTotal);

function calcularTotal() {
    const soma = parseFloat(valorBase.value) + parseFloat(valorTransp.value)
        + parseFloat(valorAliment.value);
    receitaTotal.value = soma;


}

// Receber valores de DESCONTOS:

const despAuto = document.getElementById('valor_automovel');
const despFaltas = document.getElementById('faltas');
const totalDescontos = document.getElementById('valor_descontos');

despAuto.addEventListener('input', calcDescontos);
despFaltas.addEventListener('input', calcDescontos);


function calcDescontos() {
    const soma = parseFloat(despAuto.value) + parseFloat(despFaltas.value);
    totalDescontos.value = soma;
}

// Calcular o valor TOTAL (Receita - Descontos):

const valorTotal = document.getElementById('valor_total');
const buttonCalc = document.getElementById('btn_calcular');

buttonCalc.addEventListener('click', () => {
    valorTotal.value = parseFloat(receitaTotal.value) - parseFloat(totalDescontos.value)
});






