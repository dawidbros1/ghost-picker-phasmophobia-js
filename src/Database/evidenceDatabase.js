class EvidenceDatabase {
    constructor() {
        this.evidences = [
            {
                index: 1,
                name: 'Spirit Box',
                img: 'spirit_box.png',
                output: "Gadajka"
            },
            {
                index: 2,
                name: 'Odciski palców',
                img: 'fingerprints.jpg',
            },
            {
                index: 3,
                name: 'Pismo ducha',
                img: 'book.png',
            },
            {
                index: 4,
                name: 'Orby',
                img: 'orb.jpg',
            },

            {
                index: 5,
                name: 'EMF Poziom 5',
                img: 'EMF.jpg',
                output: "Detektor pola elektromagnetycznego"
            },
            {
                index: 6,
                name: 'Mroźna temperatura',
                img: 'temperature.jpg',
            },

            {
                index: 7,
                name: 'Projektor DOTS',
                img: 'dotc.png',
                output: "Projektor zielonych kropek"
            },
        ]
    }

    get() {
        var evidences = []

        this.evidences.forEach(data => {
            evidences.push(new Evidence(data));
        });

        return evidences;
    }
}