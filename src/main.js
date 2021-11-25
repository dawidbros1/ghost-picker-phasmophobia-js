class Main {
    constructor() {
        this.ghostManager = new GhostManager();
        this.evidenceManager = new EvidenceManager();
        this.range = new Range();
        this.backgrounds = new Background();
    }

    init() {
        this.evidenceManager.init(this.ghostManager);
        this.ghostManager.init(this.evidenceManager);
        this.range.init();
        // this.backgrounds.init();
    }
}

var main = new Main();
var storage = new Storage();
var ghostsRecorder = new GhostsRecorder();
var evidenceRecorder = new EvidenceRecorder();

window.onload = function () {
    main.init();
}

// Jakieś info
/*
    ! ghost czy ghosts [recorder] jest poprawne xd
    ! Pozprawdzać czy nazwy zmiennych wszędzie są poprawne
*/