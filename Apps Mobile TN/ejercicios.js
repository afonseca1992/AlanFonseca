// Imprimir por consola un mensaje guardado en una variable usando la función console.log()

var mensaje = "Este mensaje se mostrara en pantalla"
console.log(mensaje);

//Fin ejercicio 1

//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

//Fin ejercicio 2


/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de 
texto que indica si el número es par o impar.Mostrar por pantalla el resultado devuelto por la función.*/
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


// Define una función que dado un array de números nos dice si alguno es par.

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


/*Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. 
 Un alumno aprobó si todas sus notas son mayores o iguales a 4*/

function aprobo(notas) {
    var notaParaAprobar = 4;
    return notas.every(nota => nota >= notaParaAprobar);
}
console.log(aprobo([8, 6, 2, 4]));


//Fin ejercicio 5


/*Define la función quienesAprobaron, que dada la información de un curso devuelve la 
 información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.*/

function aprueba(notas) {
    var notaParaAprobar = 4;
    return notas.every(nota => nota >= notaParaAprobar);
}
function quienesAprobaron(nota) {
    return nota.filter(notas => aprueba(notas))

}
console.log(quienesAprobaron([[8, 6, 2, 4], [7, 9, 4, 5], [6, 2, 4, 2], [9, 6, 7, 10]]));



//Fin ejercicio 6


/*Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
*/

function hayAlgunNegativo(arraynum) {
    return arraynum.some(numero => numero < 0);
}
console.log(hayAlgunNegativo([2, -3, 9]));


//Fin ejercicio 7


/*Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen*/

function even(numero) {
    return numero % 2 === 0;
}
function cuantosCumplen(funcionCondicion, array) {
    var arrayQueCumplen = array.filter(numero => funcionCondicion(numero));
    return arrayQueCumplen.length;
}
console.log(cuantosCumplen(even, [7, 9, 25, 42]));


//Fin ejercicio 8


//Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen


function even(Element) {
    return Element % 2 === 0;
}
function rechazar(func, arr) {
    var arrquenocumplen = arr.filter(Element => !func(Element))
    return arrquenocumplen;
}
console.log(rechazar(even, [7, 9, 87, 42]));


//Fin ejercicio 9



//Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

function contiene(numero, arr) {
    return arr.some(Element => Element == numero);
}
console.log(contiene(8, [7, 8, 9]));

//Fin ejercicio 10


//Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.


/*class Persona {
    constructor(name, age) {
        this.name = name;
        this.edad = age;
    }

    presentarse() {
        return "Mi nombre es " + this.name + " y tengo " + this.age + " años.";
    }
}

var persona = new Persona("Alan", 28);
console.log(persona.presentarse());*/


//Fin ejercicio 11

/*Crea una clase Estudiante(que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.*/
/*
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
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
Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando
y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista.
Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)*/



class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
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

    enseñando() {
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
profesor.enseñando();

profesor.addEstudiante(new Estudiante("Sofia", 27));

console.log(profesor.enseñando());

//Fin ejercicios 13