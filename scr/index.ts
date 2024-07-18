let x: number = 10;

x = 11;

console.log(x);

//inferencia x annotation


//inferencia
let y = 12

//annotation
let z: number = 12

//tipos básicos

let firstName: string = "Pedro";

let age: number = 30;

const isAdmin: boolean = true;

//String != string
console.log(typeof firstName);

firstName = "João";

console.log(firstName)

//object

const myNumbers:number[] = [1,2,3];
console.log(myNumbers);
console.log(myNumbers.length);

//Nao deixa usar o metodo toUpperCase() em variaveis do typescript number pois nao é valido

//console.log(myNumbers.toUpperCase());

//permite utilizar o metodo toUpperCase() pq a variavel é uma string 
console.log(firstName.toUpperCase());

// incrementou um valor em um array usando o metodo push
myNumbers.push(5);

console.log(myNumbers);

//tuplas -> tuple
let myTuple: [number, string, string[]];

//so permite incluir as variaveis na ordem que foi declarada
myTuple = [12, "teste", ["teste", "texto"]];

//nao permite 
//myTuple = [12, false,true];

//object literals -> {prop:value}
const user:{name:string, age:number} = {
    name: "Pedro",
    age: 18
}
console.log(user);

console.log(user.name);

console.log(user.age);

// any aceita qualquer tipo de dados (NAO DEVE SER USADO) MÁ PRATICA
let a:any = 0

a = "teste";
a = true;
a = [1,2,3,4];


// solução para contornar o any

//union type
let id:string | number = "10"

id = 200    //number
id = "400" //string

//type alias (melhoria do union)
// cria um Type com as caracteriscas que precisa(orientado)
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "000002"

//enum
//tamanho de roupas(Size: grande, Size: medio, Size: pequeno)

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",

}

enum Camisa {
    name = "Gola-V",
    size = Size.G,

}
console.log(Camisa);

//literal type
//permite somente oq foi definido
let usuario: "autenticado" | null;

// nao deixa
//usuario = "outro valor";

usuario = "autenticado";

usuario = null;


//funções
//function sum(a, b) {
    function sum(a: number, b: number) {
return a + b

}

console.log(sum(12,12));

//nao permite fora do formato definido
//console.log(sum("12",true));

function sayHello(name: string): string {
    return `Hello ${name}`; // `` aspas invertidas
}

console.log(sayHello("Rafael"));

// permite criar
function logger(msg:string){
    console.log(msg)
}

logger("testei1");

//porem o correto é utilidar o VOID que nao possui retorno
function logger1(msg:string): void {
    console.log(msg)
}

logger1("testei2");

//varievel greet? (Opicional)
function greetting(name: string, greet?: string){
    console.log(`Olá ${greet} ${name}`);

}

greetting("Jose");

//Utilizando uma verificação condicional (Opicional) com else
function greetting1(name: string, greet?: string){
    if (greet){
    console.log(`Olá ${greet} ${name}`);
}else {
    console.log(`Olá ${name}`);
}

}

greetting1("Diego");
greetting1("Diego", "Sr.");


//Utilizando uma verificação condicional (Opicional)  sem else
function greetting2(name: string, greet?: string){
    if (greet){
    console.log(`Olá ${greet} ${name}`);
    return;
}
    console.log(`Olá ${name}`);
}

greetting2("Felipe");
greetting2("Felipe", "Sr.");

//"removeComents":true quando habilitado no TSCONFIG.JS ele REMOVE TODOS OS COMENTARIOS DO PROJETO
//interface
//tipo objetos
interface MathFunctionParams {
    n1: number,
    n2: number
}
// função tipada de soma
function sumNumbers(num: MathFunctionParams) {
    return num.n1 + num.n2

}

console.log(sumNumbers({n1:1, n2:3}));


// função tipada de multiplicação
function multplyNumbers(mum: MathFunctionParams){
    return mum.n1 * mum.n2
}

console.log(multplyNumbers({n1:2, n2:3}));




//passando outros valores 
const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,

};

//passando outros valores 
console.log(multplyNumbers(someNumbers));


//narrwoing
//checagem de tipos

function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");

}

doSomething(5);

doSomething(true);


//generics
function showArrayItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
         
}

const a1 = [1,2,3]
const a2 = ["a","b","c"]

showArrayItens(a1);
showArrayItens(a2);

//DICAS

//classes (ORIENTADO A OBJETO)
//por inferencia tipo os dados da class
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved

    }
    //cria uma função para mostrar o nome do usuário do constructor com base na class
    showUserName() {
        console.log(`O nome do Usuário é ${this.name}`);
    }

    showUserIsApproved(canShow: boolean): void { 
        if (canShow) {
        console.log(`O Usuário é um ${this.role}`);
        return;
    }
        console.log("Informação restita");
}
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

//mostra o nome do usuario zeca
zeca.showUserName();

zeca.showUserIsApproved(true);
zeca.showUserIsApproved(false);


// interface em classes
//criando uma classe de veiculos
interface IVehicle {
    brand: string
    showBrand(): void

}
//definindo os implementos do veiculo
class Car implements IVehicle {

    brand
    wheels

    
    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }
    //pegando a informação da marca do veiculo para o metodo showBrand
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);

    }
}
//criando o carro e passado as caracteristicas do veiculo como marca e pneus
const fusca = new Car("VW", 4);
fusca.showBrand();


//herança

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand,wheels)
        this.engine = engine

    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);
a4.showBrand();


//decorators
//função
//CONSTRUCTOR DECORATOR
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}} >(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        };
    };
}
// TODA VEZ QUE TIVER UM @ EM UM TS ELE È UM DECORATOR

@BaseParameters()

class Person {
    name;

    constructor(name: string) {
        this.name = name

    }

}

const sam = new Person("Sam");

console.log(sam);