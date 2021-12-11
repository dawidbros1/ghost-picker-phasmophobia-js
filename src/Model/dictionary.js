class Dictionary {
    constructor() {
        this.words = [];
        this.initWords();
    }

    initWords() {
        this.words['spirit_box'] = ['spirit box', 'gada', 'beatbox'];
        this.words['fingerprints'] = ['odciski', 'odciski palców', 'ślady'];
        this.words['book'] = ['napisał', 'książka', 'pismo', 'pismo ducha'];
        this.words['orb'] = ['orby', 'orbi', 'kropki'];
        this.words['EMF'] = ['5', 'pięć', 'piąteczka', 'mf', 'rmf', 'emf', 'poziom 5'];
        this.words['temperature'] = ['temperatura', 'piździ', 'zimno', 'mroźna temperatura'];
        this.words['dotc'] = ['zielone', 'dots', 'projektor', 'zielona', 'projektro dots', 'projektor dotz'];
        this.words['reset'] = ['reset', 'restart'];
        this.words['fake'] = ['fake', 'fejk'];
    }

    getKeys() {
        let keys = [];

        this.words.forEach((element, key) => {
            keys.push(key);
        });

        return keys;
    }

    getSection(name) {
        return this.words[name];
    }
}