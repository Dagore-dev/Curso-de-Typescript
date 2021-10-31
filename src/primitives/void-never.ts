//Primitivo void para funciones
function showInfo ( { id, username, firstName } : any ) : void {//La función no tiene return y recibe por parámetros un objeto user de tipo indefinido.
    console.log("User information:", `
        id: ${id}
        username: ${username}
        firstname: ${firstName}
    `);
}

showInfo( {id: 1, username: "Dagore-dev", firstName: "David"} );

//Void usado en variables

let unusable : void;
unusable = undefined;
//unusable = null;  //Esta asignación no funciona en modo estricto

//Primitivo never

function handleError (code : number, message : string) : never {
    //Process
    //Create a message
    throw new Error(`Error code: ${code}. ${message}.`)
}

try {
    handleError(404, "Not found");
} catch (error) {}

function sumNumber (limit : number) : never {//never porque es un bucle sin fin.
    let sum = 0;

    while (true) {
        sum++;
    }
}

sumNumber(10);