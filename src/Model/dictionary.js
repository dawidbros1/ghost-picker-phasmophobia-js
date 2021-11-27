class Dictionary {
    constructor() {
        this.words = [];
        this.words['spirit_box'] = ['spirit box', 'gada'];
        this.words['fingerprints'] = ['odciski', 'odciski palców'];
        this.words['book'] = ['napisał', 'książka', 'pismo'];
        this.words['orb'] = ['orby', 'orbi'];
        this.words['EMF'] = ['5', 'pięć', 'piąteczka', 'mf', 'rmf'];
        this.words['temperature'] = ['temperatura', 'piździ', 'zimno'];
        this.words['dotc'] = ['zielone', 'dots', 'projektor', 'ziolone'];
        this.words['reset'] = ['reset', 'restart'];
    }

    get(name) {
        return this.words[name];
    }
}