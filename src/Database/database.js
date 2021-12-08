class Database {
    constructor() {
        this.evidenceDatabase = new EvidenceDatabase();
        this.ghostDatabase = new GhostDatabase();
        this.feedbackDatabase = new FeedbackDatabase();
    }

    getEvidences() {
        return this.evidenceDatabase.get();
    }

    getGhosts() {
        return this.ghostDatabase.get();
    }

    feedback() {
        return this.feedbackDatabase;
    }
}