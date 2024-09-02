//1.Ül: Luua Array numbritega ja leida spetsiifilise nubri indeks.


    const array = [1,2,3,4,5, "hi"];

    function findIndex(array,num){
        return array.indexOf(num);
    }

    console.log (FindIndex(array,5));


// arrow functions
//2. ül: funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

function addNumbersFn(num1,num2){
    return num1 + num2;
}

console.log(addNumbersFn(1,2));

//3.ül: ümber kirjutada arrow funktsioonina

const addNumbersArrowFn =(num1, num2)=>{
    return num1 + num2
};

//4.ül: kirjuta ümber shorthand arrow funktsioonina

const addNumbersArrowFnShort =(num1, num2)=> num1 + num2;

//()=>{return...}
//()=> (return)...

console.log(addNumbersArrowFnShort(1,2)),

//nested
//5.ül: luua funktsioon sellisel kujul, et saaks kutsuda välja seda nii:
function addNumbersArrowNested(num1) {
    return function (num2) {
        return num1 + num2
    }
}

console.log(addNumbersArrowFnNested (3) (99));
//6.ül: Looge samast funktsioonist arrowfunktsioon

const addNumbersArrowShort = (num1)=> (num1)+ (num2)
// 7.ül: AF printida "Hello (nimi)" ja kasutada string literals
