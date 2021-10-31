//La aserción de tipo consiste en declarar el tipo de una variable o función de forma manual después de la declaración de esta.

//Angle bracket sintax
let chain : any;
chain = "David";

//TS no hace ningún cast de tipo que nosostros no le pidamos, si usamos chain sin especificar aquí que es un string el compilador no nos ayuda cuando queremos recurrir a los métodos o propiedades de una instancia de String.
let message : string = (<string> chain).length 
    ? `Hola, ${chain}`
    : "La longitud de tu nombre es muy pequeña";

//as sintax, recomendable para evitar problemas con jsx
message = (chain as string).length
    ? `Hola, ${chain}`
    : "La longitud de tu nombre es muy pequeña";

    console.log(message);