// Imprimir por consola un mensaje guardado en una variable usando la funci�n console.log()

var mensaje = "Este mensaje se mostrara en pantalla"
console.log(mensaje);

//Fin ejercicio 1

//Crear un array llamado meses y que almacene el nombre de los doce meses del a�o. Mostrar por pantalla los doce nombres utilizando la funci�n console.log()

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

//Fin ejercicio 2


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


//Fin ejercicio 3


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


//Fin ejercicio 4


/*Define la funci�n aprob�, que dada la lista de las notas de un alumno devuelve si el alumno aprob�. 
 Un alumno aprob� si todas sus notas son mayores o iguales a 4*/

function aprobo(notas) {
    var notaParaAprobar = 4;
    return notas.every(nota => nota >= notaParaAprobar);
}
console.log(aprobo([8, 6, 2, 4]));


//Fin ejercicio 5


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



//Fin ejercicio 6


/*Define la funci�n hayAlgunNegativo, que dada una lista de n�meros nos dice si hay alg�n negativo
*/

function hayAlgunNegativo(arraynum) {
    return arraynum.some(numero => numero < 0);
}
console.log(hayAlgunNegativo([2, -3, 9]));


//Fin ejercicio 7


/*Escribi una funci�n cuantosCumplen que dada una condici�n y una lista, diga cuantos elementos la cumplen*/

function even(numero) {
    return numero % 2 === 0;
}
function cuantosCumplen(funcionCondicion, array) {
    var arrayQueCumplen = array.filter(numero => funcionCondicion(numero));
    return arrayQueCumplen.length;
}
console.log(cuantosCumplen(even, [7, 9, 25, 42]));


//Fin ejercicio 8


//Escrib� una funci�n rechazar, que dada una condici�n y un array, devuelva un array con los elementos que no la cumplen


function even(Element) {
    return Element % 2 === 0;
}
function rechazar(func, arr) {
    var arrquenocumplen = arr.filter(Element => !func(Element))
    return arrquenocumplen;
}
console.log(rechazar(even, [7, 9, 87, 42]));


//Fin ejercicio 9



//Define la funci�n contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

function contiene(numero, arr) {
    return arr.some(Element => Element == numero);
}
console.log(contiene(8, [7, 8, 9]));

//Fin ejercicio 10


//Crea una clase Persona que tenga los atributos nombre y edad. Adem�s agregale un m�todo presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.


/*class Persona {
    constructor(name, age) {
        this.name = name;
        this.edad = age;
    }

    presentarse() {
        return "Mi nombre es " + this.name + " y tengo " + this.age + " a�os.";
    }
}

var persona = new Persona("Alan", 28);
console.log(persona.presentarse());*/


//Fin ejercicio 11

/*Crea una clase Estudiante(que herede de Persona) que tenga un atributo profesor y tenga dos m�todos.
El m�todo estudiando() que imprime el mensaje �Estudiando con � y el nombre del profesor con el que se encuentra estudiando.
El m�todo setProfesor(profesor) que setea con qu� profesor se encuentra estudiando.*/
/*
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " a�os.";
    }
}

    var persona = new Persona("Alan", 28);
console.log(persona.presentarse());

class Estudiante extends Persona {

    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

}

var primerestudiante = new Estudiante("Rodolfo", 40, "Martinez");
console.log(primerestudiante.estudiando());
primerestudiante.setProfesor("Ramiro");
console.log(primerestudiante.estudiando());
*/
//Fin ejercicio 12

/*13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante.
Adem�s debe tener dos m�todos ense�ando() que imprima por consola todos sus estudiantes a los cuales les est� ense�ando
y el m�todo addEstudiante(unEstudiante) que agregue a ese estudiante a la lista.
Adem�s este m�todo es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)*/



class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} a�os.`)
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, profesor = undefined) {
        super(nombre, edad);
        this.profesor = profesor;
    }
    setProfesor(profesor) {
        this.profesor = profesor;
    }
    estudiando() {
        return "Estudiando con " + this.profesor;
    }

 class Profesor extends Persona {
    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        if (estudiantes) {
            estudiantes.forEach(i => i.setProfesor(nombre));
            this.estudiantes = estudiantes;
        } else {
            this.estudiantes = [];
        }
    }

    ense�ando() {
        this.estudiantes.forEach(e => console.log(e.nombre));
    }

    addEstudiante(estudiante) {
        estudiante.setProfesor(this.nombre);
        this.estudiantes.push(estudiante);
    }
}

var arrayAlumnos = [
    new Estudiante("Alan", 28),
    new Estudiante("Gonzalo", 55)
];

var profesor = new Profesor("Martinez Ramiro", 40, arrayAlumnos);
console.log(profesor.presentarme());
profesor.ense�ando();

profesor.addEstudiante(new Estudiante("Sofia", 27));

console.log(profesor.ense�ando());

//Fin ejercicios 13