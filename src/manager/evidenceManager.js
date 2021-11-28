class EvidenceManager {
    constructor() {
        this.evidences = (new Database).getEvidences();
        this.evidencesBox = document.getElementById('evidences');
    }

    init(ghostManager) {
        this.ghostManager = ghostManager;

        this.evidences.forEach((evidence) => {
            evidence.render(this.evidencesBox);
        })

        this.initLeftClickAction();
        this.initRightClickAction();
        this.createResetButton();
    }

    // ALL FOR LEFT CLICK
    initLeftClickAction() {
        let evidences = document.getElementsByClassName("item");

        for (let i = 0; i < evidences.length; i++) {
            evidences[i].addEventListener('click', () => {
                this.selectEvidence(this.evidences[i])
            })
        }
    }

    selectEvidence(e) {
        let SE = this.getSelectedEvidences();
        let RE = this.getRejectedEvidences();
        let intersection = SE.includes(e.index);

        if (RE.includes(e.index) == false) {
            if ((intersection == false && SE.length < 3) || intersection == true) {
                e.select();
                this.ghostManager.showGhosts();
                return true;
            }
        }

        return false;
    }

    getSelectedEvidences() {
        let selectedEvidences = [];

        this.evidences.forEach(evidence => {
            if (evidence.selected == true) {
                selectedEvidences.push(evidence.index);
            }
        });

        return selectedEvidences;
    }

    // ALL FOR RIGHT CLICK
    initRightClickAction() {
        let evidences = document.getElementsByClassName("item");

        for (let i = 0; i < evidences.length; i++) {
            evidences[i].addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.rejectEvidence(this.evidences[i])
            })
        }
    }

    rejectEvidence(e) {
        let SE = this.getSelectedEvidences();
        let intersection = SE.includes(e.index);

        if (intersection == false) {
            e.reject();
            this.ghostManager.showGhosts();
        }
    }

    getRejectedEvidences() {
        let rejectedEvidences = [];

        this.evidences.forEach(evidence => {
            if (evidence.rejected == true) {
                rejectedEvidences.push(evidence.index);
            }
        });

        return rejectedEvidences;
    }

    // OTHER
    clearEvidences() {
        this.evidences.forEach(e => {
            e.reset();
        });

        this.ghostManager.showGhosts();
    }

    createResetButton() {
        let button;
        button = document.createElement("img");
        button.setAttribute('src', 'images/reset.png');
        button.setAttribute('id', 'reset');
        button.classList.add("no-item")

        this.evidencesBox.appendChild(button);
        button.addEventListener('click', () => {
            this.clearEvidences();
        })
    }

    findEvidenceByIndex(index) {
        this.evidences.forEach(evidence => {
            if (evidence.index == index) return evidence;
        });
    }
}