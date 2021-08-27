class EvidenceRecorder {
    constructor() {
        this.index = 1;
        this.evidence = [];
    }

    registerEvidences() {
        let name, img;

        // Spirit box
        name = "Spirit Box";
        img = "images/spirit_box.png";
        this.registerEvidence(new Evidence(name, img))

        // Odciski palców
        name = "Odciski palców";
        img = "images/fingerprints.jpg";
        this.registerEvidence(new Evidence(name, img))

        // Pismo ducha
        name = "Pismo ducha";
        img = "images/book.png";
        this.registerEvidence(new Evidence(name, img))

        // Orb
        name = "Orb";
        img = "images/orb.jpg";
        this.registerEvidence(new Evidence(name, img))

        // EMF poziom 5
        name = "EMF poziom 5";
        img = "images/EMF.jpg";
        this.registerEvidence(new Evidence(name, img))

        // Mroźna temperatura
        name = "Mroźna temperatura";
        img = "images/temperature.jpg";
        this.registerEvidence(new Evidence(name, img))

        // Projektor DOTS
        name = "Projektor DOTS";
        img = "images/dotc.png";
        this.registerEvidence(new Evidence(name, img))

        return this.evidence;
    }

    registerEvidence(evidence) {
        evidence.setIndex(this.index++);
        this.evidence.push(evidence);
    }
}