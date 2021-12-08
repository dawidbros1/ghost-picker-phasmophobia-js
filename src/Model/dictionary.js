class Dictionary {
    constructor() {
        this.words = [];
        this.feedback = [];

        this.initWords();
    }

    initWords() {
        this.words['spirit_box'] = ['spirit box', 'gada', 'beatbox'];
        this.words['fingerprints'] = ['odciski', 'odciski palców'];
        this.words['book'] = ['napisał', 'książka', 'pismo', 'pismo ducha'];
        this.words['orb'] = ['orby', 'orbi', 'kropki'];
        this.words['EMF'] = ['5', 'pięć', 'piąteczka', 'mf', 'rmf', 'emf', 'poziom 5'];
        this.words['temperature'] = ['temperatura', 'piździ', 'zimno', 'mroźna temperatura'];
        this.words['dotc'] = ['zielone', 'dots', 'projektor', 'zielona', 'projektro dots', 'projektor dotz'];
        this.words['reset'] = ['reset', 'restart'];
    }

    getWords(name) {
        return this.words[name];
    }
}