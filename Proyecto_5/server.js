const numero1 = "50",
    numero2 = 10,
    numero3 = 'tres';

//console.log(numero1 + numero2);
//console.log(typeof (numero3));
//console.log(parseInt(numero3));

let dato;
dato = Number("20");
dato = Number('20.10931');
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number('Hola Mundo');
dato = Number([1, 2, 3, 4]);
//Parse int combierte el string a tipo de dato.  
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat('100.2030');
dato = parseInt('100.2030');

//toFixed
dato = '18929173';
dato = 18929173.98694994965949494949949

console.log(dato);
console.log(typeof dato);
console.log(parseInt(dato).toFixed(2));







