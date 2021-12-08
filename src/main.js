class Main {
    constructor() {
        this.ghostManager = new GhostManager();
        this.evidenceManager = new EvidenceManager();
        this.speechListener = new SpeechListener();
        this.background = new Background();
    }

    init() {
        this.evidenceManager.init(this.ghostManager);
        this.ghostManager.init(this.evidenceManager);
        this.speechListener.init(this.evidenceManager, this.ghostManager);

        this.background.init();
    }
}

var storage = new Storage();

window.onload = function () {
    (new Main()).init();
}