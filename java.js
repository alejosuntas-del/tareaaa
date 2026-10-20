const formulario = document.getElementById('formularioValores');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 


    let a = Number(document.getElementById('valor1').value); 
    let b = Number(document.getElementById('valor2').value);
    let c = Number(document.getElementById('valor3').value);

    if( a==0){
          resultado.innerHTML = "el valor de a no puede ser 0"
          return;
    }
        
    let d = (b * b) - (4 * a * c);


    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        resultado.innerHTML = "Dos soluciones: X1 = " + x1 + " y X2 = " + x2;
    } 
    else if (d === 0) {
        let x = -b / (2 * a);
        resultado.innerHTML = "Una solución: X = " + x;
    } 
    else {
        resultado.innerHTML = "No tiene soluciones reales";
    }
});