class GhostManager {
    constructor() {
        this.ghosts = (new Database).getGhosts();
        this.ghostsBox = document.getElementById("ghosts");
    }

    init(evidenceManager) {
        this.evidenceManager = evidenceManager;
        this.showGhosts([]);
    }

    showGhosts() {
        var selectedEvidences = this.evidenceManager.getSelectedEvidences();
        var rejectedEvidences = this.evidenceManager.getRejectedEvidences();
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
        var SE = this.evidenceManager.getSelectedEvidences();
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