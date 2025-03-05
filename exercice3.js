class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    afficher() {
        console.log(`Vecteur2D(${this.x}, ${this.y})`);
    }
    additionner(autreVecteur) {
        return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
}

let v1 = new Vecteur2D();
let v2 = new Vecteur2D(3, 4);
v1.afficher();
v2.afficher();
let v3 = v1.additionner(v2);
v3.afficher();

class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }
    afficher() {
        console.log(`${this.nom} - Longueur: ${this.longueur}, Largeur: ${this.largeur}`);
    }
    surface() {
        return this.longueur * this.largeur;
    }
}

class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

let rect = new Rectangle(5, 3);
let carre = new Carre(4);
rect.afficher();
console.log(`Surface: ${rect.surface()}`);
carre.afficher();
console.log(`Surface: ${carre.surface()}`);

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
    afficher() {
        console.log(`Segment de (${this.orig.x}, ${this.orig.y}) à (${this.extrem.x}, ${this.extrem.y})`);
    }
}

let seg = new Segment(1, 2, 4, 6);
seg.afficher();
