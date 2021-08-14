class Main {
    constructor() {
        this.ghostManager = new GhostManager();
        this.evidenceManager = new EvidenceManager();
    }

    init() {
        this.evidenceManager.init(this.ghostManager);
        this.ghostManager.init(this.evidenceManager);
    }
}

var main = new Main();

window.onload = function () {
    main.init();
}