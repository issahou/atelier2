
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
}
Etudiant.prototype.etudier = function () {
    console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
};


function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
}
Professeur.prototype.enseigner = function () {
    console.log(`Le professeur ${this.nom} enseigne.`);
};

// Création de la liste des étudiants
let etudiants = [
    new Etudiant("Ali", "moussa", 22, "CNE12345"),
    new Etudiant("omar", "fati", 21, "CNE67890"),
    new Etudiant("Martin", "Charles", 23, "CNE54321"),
    new Etudiant("paul", "Jean", 20, "CNE09876")
];

// Tri des étudiants par ordre alphabétique (nom puis prénom)
etudiants.sort((a, b) => {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    }
    return a.nom.localeCompare(b.nom);
});

// Affichage des étudiants triés
etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom} - ${etudiant.age} ans`);
});

// Création d'un professeur
let professeur = new Professeur("mohamed", 45, "CIN98765");
professeur.enseigner();
