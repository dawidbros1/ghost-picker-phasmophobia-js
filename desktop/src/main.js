class Main {
    constructor() {
        this.ghostManager = new GhostManager();
        this.evidenceManager = new EvidenceManager();
        this.ui = new UI();
    }

    init() {
        this.evidenceManager.init(this.ghostManager);
        this.ghostManager.init(this.evidenceManager);
        this.ui.init();
    }
}

var main = new Main();
var storage = new Storage();

window.onload = function () {
    main.init();
}