class Main {
    constructor() {
        this.ghosts = []
        this.evidence = [];
        this.selectedEvidence = new Array()
        this.ghostsBox = document.getElementById("ghosts");

        this.items;
        this.init();
    }

    init() {
        initGhosts(this.ghosts); // FILE:GHOST as FUNCTION
        initEvidence(this.evidence); // FILE:EVIDENCE as FUNCTION
        this.initActions();
        this.showGhosts();
    }

    initActions() {
        // Dodanie wydarzenia onclick na dowodach
        var main = this;
        this.items = document.getElementsByClassName("item");

        for (var i = 0; i < main.items.length; i++) {
            (function (i) {
                main.items[i].addEventListener('click', function (event) {
                    main.itemClickAction(main.evidence[i].index, main.items[i]);
                }, false);
            })(i);
        }
    }

    showGhosts() {
        var count = 0;
        this.ghostsBox.innerHTML = "";

        this.selectedEvidence.forEach(element => {
            if (element != 0) {
                count++;
            }
        });

        this.ghosts.forEach(ghost => {
            let intersection = this.selectedEvidence.filter(x => ghost.evidence.includes(x));

            if (intersection.length == count) {
                this.showGhost(ghost, intersection);
            }
        });
    }

    showGhost(ghost, intersection) {
        let html = '<div class = "ghost">';
        html += '<div> <span class="bold">Nazwa ducha: </span> ' + ghost.name + '</div>';
        html += '<div> <span class="bold">Wyjątkowe moce: </span> ' + ghost.power + '</div>';
        html += '<div> <span class="bold">Słabość: </span> ' + ghost.weakness + '</div>';
        html += '<div> <span class="bold">Dowody: </span>';

        for (var j = 0; j < ghost.evidence.length; j++) {
            var evidenceIndex = ghost.evidence[j];
            var selected = false;

            for (var k = 0; k < intersection.length; k++) {
                if (intersection[k] == evidenceIndex) {
                    selected = true;
                }
            }

            if (selected) {
                html += '<span class = "green">' + this.evidence[evidenceIndex - 1].name + '</span>, ';
            }
            else {
                html += '<span class = "red">' + this.evidence[evidenceIndex - 1].name + '</span>, ';
            }
        }

        html += '</div>';
        html += '</div>';

        this.ghostsBox.innerHTML += html;

    }

    itemClickAction(index, item) {
        let intersection = this.selectedEvidence.includes(index); // Czy zawiera taki element

        if (intersection == true) {
            removeA(this.selectedEvidence, index);
            item.classList.remove("redBorder");
        }
        else {
            if (this.selectedEvidence.length < 3) {
                this.selectedEvidence.push(index);
                item.classList.add("redBorder");
            }
        }

        this.showGhosts();
    }
}

var main = new Main();
