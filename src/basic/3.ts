//Створіть змінну, яка може містити або рядок, або число (union type)? 
//Також, оголосіть змінну, яка може містити лише одне з двох можливих 
//рядкових значень: 'enable' або 'disable' (literal type).

let mixetValue1: string | number ;
mixetValue1 = 22;
mixetValue1 = 'twenty two';
mixetValue1 ='disable';


let mixetValue2: 'enable' | 'disable' ;
mixetValue2 = 'enable';
mixetValue2 = 'disable';
//mixetValue2 = 'twenty two';// error, because only 'enable' or 'disable' shood be