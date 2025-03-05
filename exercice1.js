// Fonction constructeur Voiture
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}

// Classe Hyundai héritant de Voiture
function Hyundai(model, marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
}
Hyundai.prototype = Object.create(Voiture.prototype);
Hyundai.prototype.constructor = Hyundai;
Hyundai.prototype.alarmer = function () {
    console.log("Alarme activée pour la Hyundai " + this.model);
};

// Classe Ford héritant de Voiture
function Ford(model, marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
}
Ford.prototype = Object.create(Voiture.prototype);
Ford.prototype.constructor = Ford;

// Création de la liste des voitures
let voitures = [
    new Hyundai("i30", "Hyundai", 2020, "Berline", "Essence", "Série A", true),
    new Ford("Mustang", "Ford", 2018, "Sport", "Essence", ["GPS", "Toit ouvrant"]),
    new Hyundai("Tucson", "Hyundai", 2022, "SUV", "Diesel", "Série B", false),
    new Ford("Focus", "Ford", 2019, "Compacte", "Hybride", ["Caméra de recul", "Bluetooth"])
];

// Tri des voitures par année croissante
voitures.sort((a, b) => a.annee - b.annee);

// Affichage des voitures triées
voitures.forEach(voiture => {
    console.log(`${voiture.marque} ${voiture.model} - ${voiture.annee}`);
});
