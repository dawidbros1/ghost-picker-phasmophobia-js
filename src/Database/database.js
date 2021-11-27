class Database {
    constructor() {
        this.evidenceDatabase = new EvidenceDatabase();
        this.ghostDatabase = new GhostDatabase();
    }

    getEvidences() {
        return this.evidenceDatabase.get();
    }

    getGhosts() {
        return this.ghostDatabase.get();
    }
}