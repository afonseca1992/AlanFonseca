// Imprimir por consola un mensaje guardado en una variable usando la funci�n console.log()

var mensaje = "Este mensaje se mostrara en pantalla"
console.log(mensaje);

//Crear un array llamado meses y que almacene el nombre de los doce meses del a�o. Mostrar por pantalla los doce nombres utilizando la funci�n console.log()

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

/*Escribir el c�digo de una funci�n a la que se pasa como par�metro un n�mero entero y devuelve como resultado una cadena de 
texto que indica si el n�mero es par o impar.Mostrar por pantalla el resultado devuelto por la funci�n.*/
function esParImpar(x) {
    if (x % 2 == 0) {
        return x + " es par";
    }
    else {
        return x + " es impar";
    }
}
console.log(esParImpar(4));

// Define una funci�n que dado un array de n�meros nos dice si alguno es par.

function algunoEsPar(arraynum) {

    if (Array.isArray(arraynum))
    {
        return arraynum.some(numero => numero % 2 == 0);
    }
    else {
        console.log("no cuenta como arr");
    }
}
console.log(algunoEsPar([1, 2, 3]));

/*Define la funci�n aprob�, que dada la lista de las notas de un alumno devuelve si el alumno aprob�. 
 Un alumno aprob� si todas sus notas son mayores o iguales a 4*/

function aprobo(notas) {
    var notaParaAprobar = 4;
    return notas.every(nota => nota >= notaParaAprobar);
}
console.log(aprobo([8, 6, 2, 4]));

/*Define la funci�n quienesAprobaron, que dada la informaci�n de un curso devuelve la 
 informaci�n de los alumnos que aprobaron. Pod�s usar la funci�n que hiciste en el ejercicio anterior.*/

function aprueba(notas) {
    var notaParaAprobar = 4;
    return notas.every(nota => nota >= notaParaAprobar);
}
function quienesAprobaron(nota) {
    return nota.filter(notas => aprueba(notas))

}
console.log(quienesAprobaron([[8, 6, 2, 4], [7, 9, 4, 5], [6, 2, 4, 2], [9, 6, 7, 10]]));

/*Define la funci�n hayAlgunNegativo, que dada una lista de n�meros nos dice si hay alg�n negativo
*/

function hayAlgunNegativo(arraynum) {
    return arraynum.some(numero => numero < 0);
}
console.log(hayAlgunNegativo([2, -3, 9]));

/*Escribi una funci�n cuantosCumplen que dada una condici�n y una lista, diga cuantos elementos la cumplen*/

function even(numero) {
    return numero % 2 === 0;
}
function cuantosCumplen(funcionCondicion, array) {
    var arrayQueCumplen = array.filter(numero => funcionCondicion(numero));
    return arrayQueCumplen.length;
}
console.log(cuantosCumplen(even, [7, 9, 25, 42]));

//Escrib� una funci�n rechazar, que dada una condici�n y un array, devuelva un array con los elementos que no la cumplen


function even(Element) {
    return Element % 2 === 0;
}
function rechazar(func, arr) {
    var arrquenocumplen = arr.filter(Element => !func(Element))
    return arrquenocumplen;
}
console.log(rechazar(even, [7, 9, 87, 42]));

//Define la funci�n contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

function contiene(numero, arr) {
    return arr.some(Element => Element == numero);
}
console.log(contiene(8, [7, 8, 9]));

