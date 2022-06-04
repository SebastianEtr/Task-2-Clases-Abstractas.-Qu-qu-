/*console.log('hello world');

let perro = 'perro';
perro ='comida';

const comida = 787;

function camisa() {
    console.log('hello world');
    const a = 'kooko';
console.log(a);

    
} 

console.log(comida);
let comida = "pan";
let comida2:number =98;
*/

/*
const nombre:string = 'Obi';
const numero:number = 2;

numero === 2; //true
numero === '2'; // false
numero !== 3; // true

nombre === 'Obi'; // true
nombre === 'Luke'; // false

numero === nombre; // false
numero === numero; // true
numero != nombre; // true

numero && nombre; // true
true || false; // true
false || false; // false
false && false; //false
*/
// ejemplos de operadores logicos

//ahora vamos con ejemplos de if y else
/*
if (condition) {
    // codigo a ejecutar cuando la condicion es verdadera
} else{
// codigo a ejecutar cuando la condicion es falsa
}

const numero:number = 1;
if (numero === 1) {
    console.log('variable tiene el numero 1'); // ejecutada 
    
} else {
    console.log('variable no es el numero 1'); // ignorada
    
}

const letra:String = 'B';
if (letra === 'A') {
    console.log('variable tiene la letra A'); // ignorada
    
    
} else {
    console.log('variable no es la letra A');
    
}
*/
/*
// if else-if

if (condition1) {
    //codigo que se ejecuta si condicional1 es verdadera
} else if (condition2) {
    //codigo que se ejecuta si condicional2 es verdadera
}

//solo se ejecutara el bloque de codigo cuya condicion se cumpla primero

const numero:number = 3;
const letra:string = 'B';

if (numero === 1) {
    console.log('numero es igual a 1'); // no se ejecutara 
    
} else if (letra === 'A') {
    console.log('letra es igual a A'); //no se ejecutara
} else if (numero === 3) {
    console.log('numero es igual a 3'); // si se ejecutara
} else if (letra === 'B') {
    console.log('letra es igual a B');// no se ejecutara porque ya ejecuto el de arriba
    
}


// if/else - if/else 

if (condition1) {
    //codigo que se ejecuta si condicional1 es verdadera
} else if (condition2) {
    //codigo que se ejecuta si condicional2 es verdadera
    
} else {
    //codigo que se ejecuta si ninguna condicion se cumplio
}

const numero:number = 2;
const letra:string = 'C';

if (numero === 1) {
    console.log('numero es igual a 1'); // no se ejecutara 
    
} else if (letra === 'A') {
    console.log('letra es igual a A'); //no se ejecutara
} else if (numero === 3) {
    console.log('numero es igual a 3'); // no se ejecutara
} else if (letra === 'B') {
    console.log('letra es igual a B');// no se ejecutara
    
} else {
    console.log('no se cumplio ninguna condicion anterior'); // si se ejecuta
    
}

//switch pero mas raro o algo asi
switch ('variable a evalular') {
    case 'condicion': //codigo a ejecutar 
        break;
    case <condicion2>;
        break;
        ..
        ..
        case <condicion..>;
        break;
}


const numero: number = 5;

switch (numero) {
    case 1: {
        console.log('caso 1'); // no se ejecuta
            break;
    }
    case 2:{
        console.log('caso 2'); // no se ejecuta
            break;
    }
    case 3:{
        console.log('caso 3'); // no se ejecuta
            break;
    }
    case 5:{
        console.log('caso 5'); // si se ejecuta
            break;
    }

}

// por si ninguna de las condiciones de los casos se cumplen 

const letra: string = 'E';

switch (letra) {
    case 'A': {
        console.log('caso A'); // no se ejecuta
            break;
    }
    case 'B':{
        console.log('caso B'); // no se ejecuta
            break;
    }
    case 'C':{
        console.log('caso C'); // no se ejecuta
            break;
    }
    case 'D':{
        console.log('caso D'); // no se ejecuta
            break;
    }
    default: {
        console.log('no se ejecuto ningun caso');
        
    }

}


//operador ternario

const numero: number = 1;
numero === 1? console.log('es numero 1'): console.log('no es numero 1');

// esto es equivalente a ;

if (numero === 1) {
    console.log('es numero 1');
    
} else {
    console.log('no es numero 1');
    
}



// ahora vamos con con bucles o ciclos

// while

let num:number = 1;
while (num <= 15) {
    console.log(num);
    num++ // aqui demostramos que esta siempre siendo actualizado, sino, lo que imprime seria siempre 1


}



// ahors vamos con for, es igual a while pero con la diferencia de la iniciacion de las variables

for ((inicializacion)); (condicion); (expresion-final o actualizacion)) // en la seccion de inicializacion, inicializamos la variable que nos va a ayudar a controlar el ciclo, la condicion es la que va a dictar si se va a ejecutar el codigo dentro del bloque del for y por ultimo la expresion de actualizacion donde actualizaremos la variable que controla el ciclo.
{
    // statement
    
}

for (let i = 1; i <= 15; i++){
        console.log(i);
        
    }


// ahora vamos con do-while

let i = 10;

do {
    console.log(i);
    i++
    
} while (i <= 15);



let i = 16;

do {
    console.log(i);
    i++
    // se imorime el valor 16 y se actualiza a 17
} while (i <= 15);

//como 17 es mayor a 15, solo se ejecuto una vez, aunque halla dado false


// break; nos permite salirnos del ciclo antes de que la condicion de terminacion del ciclo lo indique 

let i = 1;
while (true) // el codigo siempre de este while se va ejecutar 
{
    console.log(i);

 if (i===15) {
    break // ejecuta romper el ciclo, osea, se sale del ciclo, si 1 no es 15, actualizamos su valor y volvemos a ejecutar el ciclo
    
}
i++
}

for (let i = 1; i <= 15; i++) {
 if (i % 3 !== 0) {
     continue
 }
 console.log(`${i} es par`);
    
}

// si el numero de esa iteracion no es par vamos a la siguiente iteracion del ciclo, es decir, que el console no se ejecuta y termina la iteracion en el continue, en cambio si el numero si es par se imprime en console



// punto 3

let inicio = 1;
let fin = 10;
let out:number = 0;

function generate (){
let entero= inicio + Math.floor(Math.random()*fin);{
return (entero);
}
}
while(out != 6){
    out = generate ();
console.log(out);


} 


//punto 2

for(let n = 1; n <= 15; n++){
if (n % 5 == 0 ) {
    break
    
} else if (n % 2 != 0){
    console.log(n);
    
}

}


// punto 3

let inicio = 1;
let fin = 10;
let out:number = 0;

function generate (){
let entero= inicio + Math.floor(Math.random()*fin);{
return (entero);
}
}
while(out != 6){
    out = generate ();
console.log(out);


} 

//punto 2

for(let n = 1; n <= 15; n++){
if (n % 5 == 0 ) {
    break
    
} else if (n % 2 != 0){
    console.log(n);
    
}

}




let letra1:string = '1';
let num1:number = 1;
let num2:number = 1;
if (letra1 != letra1){
    console.log('no');
    

}else if(num1 == num2) {
console.log('no');

}


const num = 1 < 2 || 68 < 12

console.log(num);

//ejemplo de funciones


function saludar(// un valor que se le envia a la funcion, ademas de que los argumentos deben ser separados con comas, ejemplo: a,b) {
    // el codigo que se ejecutara al momento de llamar la funcion
}

saludar(); // asi llamamos a la funcion

// ejemplo



function sumar(1,2) {
    return 1 + 2;

    
}
let total:sumar(10, 20);






const saludar = function (nombre) {

    return "hola" + nombre; 
}

saludar("carlos");


const a = "hey_";

function global() {
    const b = "como_";
    function local() {
        const c = "estas";
        return a + b + c ;
        
    }
    return local ;
}
console.log(global ()()); // esta si funciono, expliquen bien youtubers de programacion 

//global()(); 

//const closure = global();
//closure (); // funciones anidadas, esta cosa no sirve -_-

const micontador = (function(){
let _contador = 0;

function incrementar() {
    return _contador++;
}
function decrecer() {
    return _contador--;
}
function valor (){
    return _contador;
}

return{
    incrementar, 
    decrecer,
    valor
}

}) ();

console.log(micontador.valor());
console.log(micontador.incrementar());
console.log(micontador.incrementar());
console.log(micontador.incrementar());
console.log(micontador.valor());
console.log(micontador.decrecer());
console.log(micontador.decrecer());
console.log(micontador.decrecer());
console.log(micontador.valor());

// esto es closure

function successCallback (result){
    console.log("audio file ready at URL: " + result); }// se crea correctamente
    
}
function failureCallback (result){
console.error(" Error generating audio file: " + result); // si se produce un error 

}
createAudioFileAsync //se reescribiera para devolver una promesa, en su lugar, adjuntaria ////sus devoluciones de llamadas(audioSettings, successCallback, failureCallback);


//createAudioFileAsync(audioSettings).then( successCallback, failureCallback);

// esto tiene que ver con promise, no entendi 



const promise = doSomething();
const promesa2 = promise.then(successCallback, failureCallback);
// la funcion then() devuelve una nueva promesa,diferente de la original



const datos = [{ // asi se hace una lista en una variable
    id: 1, 
    title: "iron man",
    year: 2008
},{
    id: 2,
    title: "spiderman",
    year: 2002
}, {
    id: 3,
    title: "avenger",
    year: 2019
}];

//const getDatos = () => {
 //   return datos;
//}

const getDatos = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        return datos;
    }, 1500);
});
}
//setTimeout nos permite ejecutar una funcion pasado una cierta cantidad de segundos
//getDatos ()
//.then ((datos) => console.log(datos));
async function fetchingData(){
    const datos2= await getDatos ();
 console.log(datos2);
 
}
 
 



//actividad 3

//Ejercicio 1

const myPromise = Promise.???(1)
myPromise.then((value) => {
  console.log(value) // log: 1
})




/*



//ejercicio 2

const myPromise = new Promise((resolve) => {
    resolve(???)  
  })
  
  myPromise.???((value) => {
   console.log(value + 1)  // log: 2
  })

  //ejercicio 3

  const myPromise = new Promise((???) => {
    resolve(1)  
  })
  
  myPromise
    .???((value) => {
      return value + 2
    })
    .???((value) => {
     console.log(value + ???) // log: 4
    })

    //ejercicio 4

    const myPromise = new Promise((???, ???) => {
        ???('Error: Operation Failed')  
      })
      
      myPromise
        .catch((err) => {
         console.log(err) // log: 'Error: Operation Failed'
        })

        //ejercicio 5

        const callback1 = (value) => console.log('Esto es un texto:', value)
        const callback2 = (value) => console.log('Esto es un numero:', value)

        const myPromise = new Promise((resolve) => {
          setTimeout(() => 
            resolve(2)
             }, 1000) 
              })

              myPromise.then(???) // log: Esto es un numero: 2
              // log: 1
              

              
           
            */





              

            
              
              