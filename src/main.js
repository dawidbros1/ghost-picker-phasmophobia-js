class Main {
    constructor() {
        this.ghostManager = new GhostManager();
        this.evidenceManager = new EvidenceManager();
        this.database = new Database();
        this.speechListener = new SpeechListener();

        this.range = new Range();
        this.background = new Background();
    }

    init() {
        this.evidenceManager.init(this.ghostManager, this.database.getEvidences());
        this.ghostManager.init(this.evidenceManager, this.database.getGhosts());
        this.speechListener.init(this.evidenceManager, this.ghostManager);

        this.range.init();
        this.background.init();
    }
}

var storage = new Storage();
var main = new Main();

window.onload = function () {
    main.init();
}


// window.onload = function () {
//     (new Main).init();
// }

// Jakieś info
/*
    ! ghost czy ghosts [recorder] jest poprawne xd
    ! Pozprawdzać czy nazwy zmiennych wszędzie są poprawne
*/