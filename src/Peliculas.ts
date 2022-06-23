
abstract class Character {
    constructor() {
    }
     abstract introduce(): string 
      abstract name (): string
      abstract poderes():string
      abstract alias():string

      introducionG() {
        console.log("Soy " + this.introduce());
      }

}


class protagonista extends Character {

    introduce(){
        return "El hombre araña (Peter Parke) obtengo poderes por la mordida de una araña geneticamente modificada, despues peleo contra el mal";
      }
   
    name (): string {
       return "peter parke"
   }
   poderes(): string {
       return "aracnidos"
   }
   alias(): string {
       return "Spiderman"
   }
}

class antagonista extends Character {

    introduce():string{
        return "un cientifico que experimento en si mismo con el suero goblin, enloqueci y me volvi malvado";
      }
  
    name(): string {
        return "Norman Osborn"
    }
    poderes(): string {
        return "fuerza sobrehumana"
    }
   alias(): string {
       return "Duende Verde"
   }
}

const Spiderman = new protagonista();
const DuendeVerde = new antagonista();

Spiderman.alias()
DuendeVerde.introduce()
