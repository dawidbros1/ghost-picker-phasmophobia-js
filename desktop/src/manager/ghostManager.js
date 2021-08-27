class GhostManager {
    constructor() {
        this.ghosts = [];
        this.ghostsBox = document.getElementById("ghosts");
    }

    init(evidenceManager) {
        this.evidenceManager = evidenceManager;
        this.ghosts = ghostsRecorder.registerGhosts();
        this.showGhosts([]);
    }

    showGhosts() {
        var selectedEvidence = this.evidenceManager.selectedEvidence;
        var rejectedEvidence = this.evidenceManager.rejectedEvidence;
        var count = selectedEvidence.length;
        this.ghostsBox.innerHTML = "";

        this.ghosts.forEach(ghost => {
            let intersection = selectedEvidence.filter(x => ghost.evidence.includes(x));
            let rejectIntersection = rejectedEvidence.filter(x => ghost.evidence.includes(x));
            let details = false;

            if (count + rejectedEvidence.length > 0) details = true;

            if (intersection.length == count && rejectIntersection.length == 0) {
                ghost.show(intersection, details, this.evidenceManager, this.ghostsBox);
            }
        });
    }
}