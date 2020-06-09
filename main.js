//  TODO TODAY:
// REPO: php-oop-prodotto
// GOAL: Provare a immaginare una classe come quella vista a lezione, definendo le variabili d'ambiente per disegnare un ipotetico prodotto di magazzino;
// Definire anche costruttore completo (tutti le variabili che avete creato) + printMe per fare il log, nell'ottica di quanto visto questa mattina a lezione

class product {

  constructor(nome_prod,altezza,larghezza,peso,cat_mercelogica,colore,materiale){
    this.nome_prod = nome_prod;
    this.altezza = altezza;
    this.larghezza = larghezza;
    this.peso = peso;
    this.cat_mercelogica = cat_mercelogica,
    this.colore = colore;
    this.materiale = materiale;
  };
}

let d = new product("divano",170,220,10,"casalinghi","marrone","cotone");
let b = new product("bottiglia",70,30,0.50,"casalinghi","trasparente","vetro");
console.log(d,b);
