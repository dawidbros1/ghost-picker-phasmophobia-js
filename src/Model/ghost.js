class Ghost {
    constructor(array) {
        this.name = array['name'];
        this.power = array['power'];
        this.weakness = array['weakness'];
        this.evidences = array['evidences'];
    }

    render(evidences, details, eManager, ghostsBox) {
        let html = '<div class = "ghost">';
        html += `<div> <span class="bold">Nazwa ducha: </span> ${this.name} </div>`;

        if (details == true) {
            html += '<div> <span class="bold">Wyjątkowe moce: </span> ' + this.power + '</div>';
            html += '<div> <span class="bold">Słabość: </span> ' + this.weakness + '</div>';
        }

        html += '<div> <span class="bold">Dowody: </span>';

        for (var j = 0; j < this.evidences.length; j++) {
            var evidencesIndex = this.evidences[j];
            var selected = false;

            for (var k = 0; k < evidences.length; k++) {
                if (evidences[k] == evidencesIndex) {
                    selected = true;
                }
            }

            if (selected) {
                html += '<span class = "green">' + eManager.evidences[evidencesIndex - 1].name + '</span>, ';
            }
            else {
                let cl = "red";
                if (evidences.length == 2) cl += " bold"
                html += '<span class = "' + cl + '">' + eManager.evidences[evidencesIndex - 1].name + '</span>, ';
            }
        }

        html += '</div>';
        html += '</div>';

        ghostsBox.innerHTML += html;
    }
}