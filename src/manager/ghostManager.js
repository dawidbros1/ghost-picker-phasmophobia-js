class GhostManager {
    constructor() {
        this.ghosts = [];
        this.ghostsBox = document.getElementById("ghosts");
    }

    init(evidenceManager, ghosts) {
        this.evidenceManager = evidenceManager;
        this.ghosts = ghosts;
        this.showGhosts([]);
    }

    showGhosts() {
        var selectedEvidences = this.evidenceManager.selectedEvidences;
        var rejectedEvidences = this.evidenceManager.rejectedEvidences;
        var count = selectedEvidences.length;
        this.ghostsBox.innerHTML = "";

        this.ghosts.forEach(ghost => {
            let intersection = selectedEvidences.filter(x => ghost.evidences.includes(x));
            let rejectIntersection = rejectedEvidences.filter(x => ghost.evidences.includes(x));
            let details = false;

            if (count + rejectedEvidences.length > 0) details = true;

            if (intersection.length == count && rejectIntersection.length == 0) {
                ghost.render(intersection, details, this.evidenceManager, this.ghostsBox);
            }
        });
    }

    findGhost() {
        var SE = this.evidenceManager.selectedEvidences;
        var selectedGhost;

        if (SE.length == 3) {
            this.ghosts.forEach(ghost => {
                let count = 0;
                ghost.evidences.forEach(evidence => {
                    if (evidence == SE[0] || evidence == SE[1] || evidence == SE[2]) {
                        count++;
                    }
                });

                if (count == 3) {
                    selectedGhost = ghost;
                }
            });
        }

        return selectedGhost;
    }
}