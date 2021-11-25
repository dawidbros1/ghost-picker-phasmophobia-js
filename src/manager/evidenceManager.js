class EvidenceManager {
    constructor() {
        this.evidence = [];
        this.selectedEvidence = new Array()
        this.rejectedEvidence = new Array();

        // HTML STATIC
        this.resetButton = document.getElementById("reset")
        this.evidenceHTML = document.getElementById('evidence');
    }

    init(ghostManager) {
        this.ghostManager = ghostManager;
        this.evidence = evidenceRecorder.registerEvidences();

        this.evidence.forEach((evidence) => {
            evidence.show(this.evidenceHTML);
            evidence.initClickAction(this);
        })

        this.items = document.getElementsByClassName("item");

        this.evidenceHTML.addEventListener('click', () => {
            this.ghostManager.showGhosts();
        })

        this.evidenceHTML.addEventListener('contextmenu', () => {
            this.ghostManager.showGhosts();
        })

        this.resetButton.addEventListener('click', () => {
            this.clearEvidence();
        })
    }

    clearEvidence() {
        this.selectedEvidence.forEach(value => {
            this.items[value - 1].classList.remove("redBorder")
        });

        this.rejectedEvidence.forEach(value => {
            this.items[value - 1].classList.remove("op-30")
        });

        this.evidence.forEach(proof => {
            proof.reset();
        });

        this.selectedEvidence = [];
        this.rejectedEvidence = [];

        this.ghostManager.showGhosts([]);
    }
}