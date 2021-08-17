class GhostManager {
    constructor() {
        this.ghosts = [];
        this.max = 14; // Gdy zostanie dowy duch tą wartość należy zwiększyć
        this.ghostsBox = document.getElementById("ghosts");
    }

    init(evidenceManager) {
        this.evidenceManager = evidenceManager;
        this.initGhosts();
        this.showGhosts([]);
    }

    initGhosts() {
        let name, power, weakness, evidence;
        let right = 1;

        // Spirit
        name = "Spirit";
        power = "Brak";
        weakness = "Użycie kadzidła w pokoju powstrzyma ducha przed atakiem na dłuższy czas";
        evidence = [1, 2, 3];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Wraith
        name = "Wraith";
        power = "Wraith prawie nigdy nie dotyka ziemi, co oznacze, że niemożna ich śledzić poprzez odciski stóp";
        weakness = "Sól działa na Wraith negatywnie";
        evidence = [2, 6, 1];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Fantom
        name = "Fantom";
        power = "Patrzenie na Fantoma znacznie obniży twoje zdrowie psychiczne";
        weakness = "Sfotografowanie Fantoma sprawi, że tymczasowo zniknie";
        evidence = [5, 4, 6];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Poltergeist
        name = "Poltergeist";
        power = "Poltergeist może wchodzić w interkacje z dużą przedmiotów naraz";
        weakness = "Poltergeist jest mało skuteczny w pustych pomieszczeniach";
        evidence = [1, 2, 4];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Banshee
        name = "Banshee";
        power = "Banshee skupia się tylko na jednej osobie";
        weakness = "Lękiem Banshee jest Krucyfiks i będzie mniej agresywna w jego obecności";
        evidence = [5, 2, 6];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Jinn
        name = "Jinn";
        power = "Jinn będzie poruszał się szybciej, gdy jego ofiara jest daleko";
        weakness = "Wyłączenie źródła zasilania powstrzyma Jinna przed użyciem jego umiejętności";
        evidence = [1, 4, 5];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Mara
        name = "Mara";
        power = "Instnieje duże prawdopodobieństwo, że Mara zaakuje w mroku";
        weakness = "Włączenie światła w jej otoczeniu zmniejszy szansę na atak";
        evidence = [1, 4, 6];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Revenant
        name = "Revenant";
        power = "Prędkość Revenanta zwiększa się gdy atakuje ofiarę";
        weakness = "Ukrycie się przed nim sprawi, że będzie wolniejszy";
        evidence = [5, 2, 3];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Shade
        name = "Shade";
        power = "Nieśmiałość ducha znacznie udrudnia odnalezienie go oraz znalezienie dowodów";
        weakness = "Shade nie zacznie atakować jeśli w pobliżu jest kilka osób";
        evidence = [5, 4, 3];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Demon
        name = "Demon";
        power = "Demon będzie atakował częściej niż jakikolwiek inny duch";
        weakness = "Zadanie demonowi udanego pytania poprzez tabliczkę Ouija nie obniży zdrowia psychicznego użytkownika";
        evidence = [1, 3, 6];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Yurei
        name = "Yurei";
        power = "Yurei jest znany z wywierania silnego wpływu na ludzką psychikę";
        weakness = "Zapalania kadzidła w pokoju Yurei powoduje, że nie błąka się po lokacji przez dłuższy czas";
        evidence = [4, 3, 6];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // ONI
        name = "Oni";
        power = "Oni jest bardziej aktywny jeśli w pobliżu są ludzie, porusza on wtedy obiektami z dużą prędkością";
        weakness = "Będąc bardziej aktywnym sprawisz, że Oni będzie łatwiejszy do znalezienia i zidendyfikowania";
        evidence = [5, 1, 3];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Yokai
        name = "Yokai";
        power = "Rozmowa w jego pobliżu zdenerwuje go i zwiększy szansę na atak";
        weakness = "Podczas nawiedzania słyszy tylko najbliższy głos";
        evidence = [1, 3, 4];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

        // Hantu
        name = "Hantu";
        power = "Niskie temperatury powodują szybsze poruszanie się ducha";
        weakness = "Hantu będzie poruszał się powolniej w cieplejszych obszarach";
        evidence = [2, 3, 4];
        this.add(new Ghost(name, power, weakness, evidence, right, this.calcLeft(right++)));

    }

    calcLeft(right) {
        return this.max - right + 1;
    }

    add(ghost) {
        this.ghosts.push(ghost)
    }

    showGhosts() {
        var selectedEvidence = this.evidenceManager.selectedEvidence;
        var rejectedEvidence = this.evidenceManager.rejectedEvidence;
        var count = selectedEvidence.length;
        this.ghostsBox.innerHTML = "";

        this.ghosts.forEach(ghost => {
            let intersection = selectedEvidence.filter(x => ghost.evidence.includes(x));
            let rejectIntersection = rejectedEvidence.filter(x => ghost.evidence.includes(x));

            console.log("reject: " + rejectIntersection);

            if (intersection.length == count && rejectIntersection.length == 0) {
                this.showGhost(ghost, intersection, count);
            }
        });
    }

    showGhost(ghost, intersection, count) {
        let html = '<div class = "ghost">';
        html += `<div> <span class="bold">Nazwa ducha: </span> ${ghost.name} [${ghost.left}, ${ghost.right}] </div>`;

        if (count >= 1) {
            html += '<div> <span class="bold">Wyjątkowe moce: </span> ' + ghost.power + '</div>';
            html += '<div> <span class="bold">Słabość: </span> ' + ghost.weakness + '</div>';
        }

        html += '<div> <span class="bold">Dowody: </span>';

        var evidence = this.evidenceManager.evidence;

        for (var j = 0; j < ghost.evidence.length; j++) {
            var evidenceIndex = ghost.evidence[j];
            var selected = false;

            for (var k = 0; k < intersection.length; k++) {
                if (intersection[k] == evidenceIndex) {
                    selected = true;
                }
            }

            if (selected) {
                html += '<span class = "green">' + evidence[evidenceIndex - 1].name + '</span>, ';
            }
            else {
                html += '<span class = "red">' + evidence[evidenceIndex - 1].name + '</span>, ';
            }
        }

        html += '</div>';
        html += '</div>';

        this.ghostsBox.innerHTML += html;

    }
}