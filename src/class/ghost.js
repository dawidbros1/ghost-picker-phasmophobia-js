class Ghost {
    constructor(name, power, weakness, evidence) {
        this.name = name;
        this.power = power;
        this.weakness = weakness;
        this.evidence = evidence;
    }

    show(evidence, details, eManager, ghostsBox) {
        let html = '<div class = "ghost">';
        html += `<div> <span class="bold">Nazwa ducha: </span> ${this.name} </div>`;

        if (details == true) {
            html += '<div> <span class="bold">Wyjątkowe moce: </span> ' + this.power + '</div>';
            html += '<div> <span class="bold">Słabość: </span> ' + this.weakness + '</div>';
        }

        html += '<div> <span class="bold">Dowody: </span>';

        for (var j = 0; j < this.evidence.length; j++) {
            var evidenceIndex = this.evidence[j];
            var selected = false;

            for (var k = 0; k < evidence.length; k++) {
                if (evidence[k] == evidenceIndex) {
                    selected = true;
                }
            }

            if (selected) {
                html += '<span class = "green">' + eManager.evidence[evidenceIndex - 1].name + '</span>, ';
            }
            else {
                let cl = "red";
                if (evidence.length == 2) cl += " bold"
                html += '<span class = "' + cl + '">' + eManager.evidence[evidenceIndex - 1].name + '</span>, ';
            }
        }

        html += '</div>';
        html += '</div>';

        ghostsBox.innerHTML += html;
    }
}