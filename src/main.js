class Main {
    constructor() {
        this.ghostManager = new GhostManager();
        this.evidenceManager = new EvidenceManager();
        this.speechListener = new SpeechListener();
        this.range = new Range();
        this.background = new Background();
    }

    init() {
        this.evidenceManager.init(this.ghostManager);
        this.ghostManager.init(this.evidenceManager);
        this.speechListener.init(this.evidenceManager, this.ghostManager);

        this.range.init();
        this.background.init();
    }
}

var storage = new Storage();

window.onload = function () {
    (new Main()).init();
}