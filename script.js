class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        let ataque = "";

        if(this.tipoHeroi === "Mago") {
            ataque = "Magia";
        } else if(this.tipoHeroi === "Guerreiro") {
            ataque = "Espada";
        } else if(this.tipoHeroi === "Monge") {
            ataque = "Artes marciais";
        } else {
            ataque = "Shuriken";
        }

       console.log(`O ${this.tipoHeroi} atacou usando ${ataque}!`);
    }
}

let superMan = new Heroi("Super-man", 23, "Mago");
let robby = new Heroi("Robby", 25, "Monge");

superMan.atacar();
robby.atacar();