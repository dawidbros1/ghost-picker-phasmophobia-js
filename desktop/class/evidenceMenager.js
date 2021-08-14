class EvidenceManager {
    constructor() {
        this.evidence = [];
        this.selectedEvidence = new Array()

        this.items = document.getElementsByClassName("item");
        this.resetButton = document.getElementById("reset")
    }

    init(ghostManager) {
        this.ghostManager = ghostManager;
        this.initEvidence();
        this.initClickActions();
    }

    initEvidence() {
        this.add(new Evidence(1, "Spirit Box"));
        this.add(new Evidence(2, "Odciski palców"));
        this.add(new Evidence(3, "Pismo ducha"));
        this.add(new Evidence(4, "Orb"));
        this.add(new Evidence(5, "EMF poziom 5"));
        this.add(new Evidence(6, "Mroźna temperatura"));
    }

    initClickActions() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].addEventListener('click', () => {
                this.itemClickAction(this.evidence[i].index, this.items[i]);
            });
        }

        this.resetButton.addEventListener("click", () => {
            this.clearSelectedEvidence();
        });
    }

    add(evidence) {
        this.evidence.push(evidence)
    }

    itemClickAction(index, item) {
        let intersection = this.selectedEvidence.includes(index); // Czy zawiera taki element

        if (intersection == true) {
            let indexToRemove = this.selectedEvidence.indexOf(index);
            this.selectedEvidence.splice(indexToRemove, 1)
            item.classList.remove("redBorder");
        }
        else {
            if (this.selectedEvidence.length < 3) {
                this.selectedEvidence.push(index);
                item.classList.add("redBorder");
            }
        }

        this.ghostManager.showGhosts(this.selectedEvidence);
    }

    clearSelectedEvidence() {
        this.selectedEvidence.forEach(value => {
            this.items[value - 1].classList.remove("redBorder")
        });

        this.selectedEvidence = new Array();
        this.ghostManager.showGhosts([]);
    }
}