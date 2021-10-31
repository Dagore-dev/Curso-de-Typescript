interface User {
    readonly id: number,
    username: string,
    isPro: boolean
}

let member : User = {
    id: 1,
    username: "Dagore-dev",
    isPro: true
}

//member.id = 10;   //No podemos asignar un nuevo valor al id del objeto porque está declarado de solo lectura.