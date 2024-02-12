

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("grade-form");
    const parcial1Input = document.getElementById("parcial1");
    const parcial2Input = document.getElementById("parcial2");
    const parcial3Input = document.getElementById("parcial3");
    const resultDiv = document.getElementById("result");
    const clearBtn = document.getElementById("clear-btn");



    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nota1 = parseFloat(parcial1Input.value);
        const nota2 = parseFloat(parcial2Input.value);
        const nota3 = parseFloat(parcial3Input.value);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 > 100 || nota2 > 100 || nota3 > 100) {
            resultDiv.innerHTML = '<div class="alert alert-danger">Ingresa valores válidos entre 0 y 10 en todos los campos.</div>';
        } else {
            const notaFinal = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4);
            let mensaje = "";

            if (notaFinal >= 0 && notaFinal < 60) {
                mensaje = "Reprobado";
            } else if (notaFinal < 80) {
                mensaje = "Bueno";
            } else if (notaFinal < 90) {
                mensaje = "Muy Bueno";
            } else {
                mensaje = "Sobresaliente";
            }

            resultDiv.innerHTML = `<div class="alert alert-success">Nota Final: ${notaFinal.toFixed(2)} (${mensaje})</div>`;
        }
    });

    

    clearBtn.addEventListener("click", function () {
        parcial1Input.value = "";
        parcial2Input.value = "";
        parcial3Input.value = "";
        resultDiv.innerHTML = "";
    });
});
