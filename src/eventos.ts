/*
class conciertos {
    teatro:string
constructor(teatro:string){
   this.teatro = teatro
}
}

class obra {
    foro:string
    constructor(foro:string){
        this.foro = foro
    
    }
}

class deportivo{
    coliseo:string
    constructor(coliseo:string){
      this.coliseo = coliseo
    }

}
function eventos (co:conciertos, ot:obra, ed:deportivo): any {
    let Concierto = new conciertos("teatro medellin")
    let Obra = new obra ("parque explora")
    let Deportivo = new deportivo ("El estadio")

    return {Concierto, Obra, Deportivo} 
}
eventos ()







// boletos de avion





abstract class tickets {
    origen: string
    destino: string
    precio: number
    asientos: number

    constructor( origen: string, destino: string, precio: number, asientos: number){
    this.origen = origen
    this.destino = destino
    this.precio = precio
    this.asientos = asientos
    }
}


class primera extends tickets{ 
    cantidadEquipaje: [] 
    alimentos : []
    constructor (origen: string, destino: string, precio: number, asientos: number, cantidadEquipaje: [], alimentos : []){ 
        super(origen,destino,precio,asientos)
        this.cantidadEquipaje = cantidadEquipaje
        this. alimentos = alimentos
    }

}

class económica extends tickets{
    cantidadEquipaje: [] 
    constructor (origen: string, destino: string, precio: number, asientos: number, cantidadEquipaje: [] ){
        super(origen,destino,precio,asientos)
        this.cantidadEquipaje = cantidadEquipaje

}
}
class basePuntos extends tickets{
    constructor (origen: string, destino: string, precio: number, asientos: number){
        super(origen,destino,precio,asientos)
}
}

function tipoBoleto (Pr:primera, Ec:económica, Bp: basePuntos): string |number | [] | {} {

    let boleto1 = new primera("colombia", "Japon", 250000, 12, [],[] )
    let boleto2 = new económica("Venezuela", "Colombia",150000, 4,[])
    let boleto3 = new basePuntos("Medellin", "bogota", 80000, 5)
    return {boleto1,boleto2, boleto3}
    
}
console.log(tipoBoleto());

*/