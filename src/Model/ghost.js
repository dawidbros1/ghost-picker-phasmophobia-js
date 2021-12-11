class Ghost {
    constructor(array) {
        this.name = array['name'];
        this.power = array['power'];
        this.weakness = array['weakness'];
        this.evidences = array['evidences'];
        this.output = array['output'] ?? null;
    }

    render(evidences, details, eManager, ghostsBox) {
        let html = '<div class = "ghost">';
        html += `<div> <span class="bold">Nazwa ducha: </span> ${this.name} </div>`;

        if (details == true) {
            html += '<div> <span class="bold">Wyjątkowe moce: </span> ' + this.power + '</div>';
            html += '<div> <span class="bold">Słabość: </span> ' + this.weakness + '</div>';
        }

        html += '<div> <span class="bold">Dowody: </span>';

        // Iteracja po dowowach ducha
        for (var j = 0; j < this.evidences.length; j++) {
            var evidence = eManager.findEvidenceByIndex(this.evidences[j]);  // Pobierz j-ty dowód

            if (evidence.selected) {
                html += '<span class = "green">' + evidence.name + '</span>, ';
            }
            else {
                if (evidences.length >= 2) {
                    html += '<span class = "red bold">' + evidence.name + '</span>, ';
                }
                else {
                    html += '<span class = "red">' + evidence.name + '</span>, ';
                }
            }
        }

        html += '</div>';
        html += '</div>';

        ghostsBox.innerHTML += html;
    }
}