class EvidenceManager {
    constructor() {
        this.evidences = [];
        this.selectedEvidences = new Array()
        this.rejectedEvidences = new Array();

        // HTML FIELDS
        this.resetButton = document.getElementById("reset")
        this.evidencesHTML = document.getElementById('evidence');
    }

    init(ghostManager, evidences) {
        this.ghostManager = ghostManager;
        this.evidences = evidences;

        this.evidences.forEach((evidences) => {
            evidences.render(this.evidencesHTML);
            evidences.initClickAction(this);
        })

        this.items = document.getElementsByClassName("item");

        this.evidencesHTML.addEventListener('click', () => {
            this.ghostManager.showGhosts();
        })

        this.evidencesHTML.addEventListener('contextmenu', () => {
            this.ghostManager.showGhosts();
        })

        this.resetButton.addEventListener('click', () => {
            this.clearEvidences();
        })
    }

    clearEvidences() {
        this.selectedEvidences.forEach(value => {
            this.items[value - 1].classList.remove("redBorder")
        });

        this.rejectedEvidences.forEach(value => {
            this.items[value - 1].classList.remove("op-30")
        });

        this.evidences.forEach(proof => {
            proof.reset();
        });

        this.selectedEvidences = [];
        this.rejectedEvidences = [];

        this.ghostManager.showGhosts([]);
    }
}