class Main {
    constructor() {
        this.ghosts = [];
        this.evidence = [];
        this.statusEvedince = new Array(6)
        this.selectedEvidence = new Array(3)
        this.items;
        this.init();
    }

    init() {
        this.initGhost();
        this.initEvidence();
        this.zerosArray(this.selectedEvidence);
        this.zerosArray(this.statusEvedince);
        this.initElementsHTML();
        this.initActions();
    }

    zerosArray(array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = 0;
        }
    }

    initEvidence() {
        // Tworzenie dowodów
        this.evidence.push(new Evidence(1, "Spirit Box"));
        this.evidence.push(new Evidence(2, "Odciski palców"));
        this.evidence.push(new Evidence(3, "Pismo ducha"));
        this.evidence.push(new Evidence(4, "Orb"));
        this.evidence.push(new Evidence(5, "EMF poziom 5"));
        this.evidence.push(new Evidence(6, "Mroźna temperatura"));
    }

    initGhost() {
        // Tworzenie instancji wszystkich duchów
        //
        // ONI
        let ghost;
        ghost = new Ghost;
        ghost.setName("Oni");
        ghost.setPower("Oni jest bardziej aktywny jeśli w pobliżu są ludzie, porusza on wtedy obiektami z dużą prędkością");
        ghost.setWeakness("Będąc bardziej aktywnym sprawisz, że Oni będzie łatwiejszy do znalezienia i zidendyfikowania");
        ghost.setEvidence([5, 1, 3]);
        this.ghosts.push(ghost);
        //
        // Yurei
        ghost = new Ghost;
        ghost.setName("Yurei");
        ghost.setPower("Yurei jest znany z wywierania silnego wpływu na ludzką psychikę");
        ghost.setWeakness("Zapalania kadzidła w pokoju Yurei powoduje, że nie błąka się po lokacji przez dłuższy czas");
        ghost.setEvidence([4, 3, 6]);
        this.ghosts.push(ghost);
        //
        // Demon
        ghost = new Ghost;
        ghost.setName("Demon");
        ghost.setPower("Demon będzie atakował częściej niż jakikolwiek inny duch");
        ghost.setWeakness("Zadanie demonowi udanego pytania poprzez tabliczkę Ouija nie obniży zdrowia psychicznego użytkownika");
        ghost.setEvidence([1, 3, 6]);
        this.ghosts.push(ghost);
        //
        // Shade
        ghost = new Ghost;
        ghost.setName("Shade");
        ghost.setPower("Nieśmiałość ducha znacznie udrudnia odnalezienie go oraz znalezienie dowodów");
        ghost.setWeakness("Shade nie zacznie atakować jeśli w pobliżu jest kilka osób");
        ghost.setEvidence([5, 4, 3]);
        this.ghosts.push(ghost);
        //
        // Revenant
        ghost = new Ghost;
        ghost.setName("Revenant");
        ghost.setPower("Prędkość Revenanta zwiększa się gdy atakuje ofiarę");
        ghost.setWeakness("Ukrycie się przed nim sprawi, że będzie wolniejszy");
        ghost.setEvidence([5, 2, 3]);
        this.ghosts.push(ghost);
        //
        // Mara
        ghost = new Ghost;
        ghost.setName("Mara");
        ghost.setPower("Instnieje duże prawdopodobieństwo, że Mara zaakuje w mroku");
        ghost.setWeakness("Włączenie światła w jej otoczeniu zmniejszy szansę na atak");
        ghost.setEvidence([1, 4, 6]);
        this.ghosts.push(ghost);
        //
        // Jinn
        ghost = new Ghost;
        ghost.setName("Jinn");
        ghost.setPower("Jinn będzie poruszał się szybciej, gdy jego ofiara jest daleko");
        ghost.setWeakness("Wyłączenie źródła zasilania powstrzyma Jinna przed użyciem jego umiejętności");
        ghost.setEvidence([1, 4, 5]);
        this.ghosts.push(ghost);
        //
        // Banshee
        ghost = new Ghost;
        ghost.setName("Banshee");
        ghost.setPower("Banshee skupia się tylko na jednej osobie");
        ghost.setWeakness("Lękiem Banshee jest Krucyfiks i będzie mniej agresywna w jego obecności");
        ghost.setEvidence([5, 2, 6]);
        this.ghosts.push(ghost);
        // 
        // Poltergeist
        ghost = new Ghost;
        ghost.setName("Poltergeist");
        ghost.setPower("Poltergeist może wchodzić w interkacje z dużą przedmiotów naraz");
        ghost.setWeakness("Poltergeist jest mało skuteczny w pustych pomieszczeniach");
        ghost.setEvidence([1, 2, 4]);
        this.ghosts.push(ghost);
        //
        // Fantom
        ghost = new Ghost;
        ghost.setName("Fantom");
        ghost.setPower("Patrzenie na Fantoma znacznie obniży twoje zdrowie psychiczne");
        ghost.setWeakness("Sfotografowanie Fantoma sprawi, że tymczasowo zniknie");
        ghost.setEvidence([5, 4, 6]);
        this.ghosts.push(ghost);
        //
        // Wraith
        ghost = new Ghost;
        ghost.setName("Wraith");
        ghost.setPower("Wraith prawie nigdy nie dotyka ziemi, co oznacze, że niemożna ich śledzić poprzez odciski stóp");
        ghost.setWeakness("Sól działa na Wraith negatywnie");
        ghost.setEvidence([2, 6, 1]);
        this.ghosts.push(ghost);
        //
        // Spirit
        ghost = new Ghost;
        ghost.setName("Spirit");
        ghost.setPower("Brak");
        ghost.setWeakness("Użycie kadzidła w pokoju powstrzyma ducha przed atakiem na dłuższy czas");
        ghost.setEvidence([1, 2, 3]);
        this.ghosts.push(ghost);
        //
        // Hantu
        ghost = new Ghost;
        ghost.setName("Hantu");
        ghost.setPower("Niskie temperatury powodują szybsze poruszanie się ducha");
        ghost.setWeakness("Hantu będzie poruszał się powolniej w cieplejszych obszarach");
        ghost.setEvidence([2, 3, 4]);
        this.ghosts.push(ghost);
        //
        // Yokai
        ghost = new Ghost;
        ghost.setName("Yokai");
        ghost.setPower("Rozmowa w jego pobliżu zdenerwuje go i zwiększy szansę na atak");
        ghost.setWeakness("Podczas nawiedzania słyszy tylko najbliższy głos");
        ghost.setEvidence([1, 3, 4]);
        this.ghosts.push(ghost);

    }

    initActions() {
        // Dodanie wydarzenia onclick na polach z wyborem
        var main = this;
        this.items = document.getElementsByClassName("item");

        for (var i = 0; i < main.items.length; i++) {
            (function (i) {
                main.items[i].addEventListener('click', function (event) {
                    main.itemClickAction(i + 1, main.items[i]);
                }, false);
            })(i);
        }
    }

    initElementsHTML() {
        this.name = document.getElementById('name');
        this.power = document.getElementById('power');
        this.weakness = document.getElementById('weakness');
        this.possibleGhosts = document.getElementById("possibleGhosts");
        this.ghost = document.getElementById("ghost");
    }

    clearViewGhost() {
        this.name.innerHTML = "";
        this.power.innerHTML = "";
        this.weakness.innerHTML = "";
    }

    itemClickAction(index, item) {
        // Sprawdzenie czy dodajemy czy usuwamy elementy
        if (this.statusEvedince[index - 1] == 0) {   // Wstawienie nowego elementu do tablicy
            if (this.selectedEvidence[0] == 0 || this.selectedEvidence[1] == 0 || this.selectedEvidence[2] == 0) { // Musi być puste pole
                item.classList.add("redBorder"); // Zmiana koloru bordera
                for (var i = 0; i < this.selectedEvidence.length; i++) {
                    if (this.selectedEvidence[i] == 0 && this.selectedEvidence[i] != index) {
                        this.selectedEvidence[i] = index; // Dodanie dowodu
                        this.statusEvedince[index - 1] = 1; // Zmiana statusu
                        break;
                    }
                }
            }
        }
        else { // Usunięcie elementu z tablicy
            for (var i = 0; i < this.selectedEvidence.length; i++) {
                if (this.selectedEvidence[i] == index) {
                    item.classList.remove("redBorder"); // Zmiana koloru bordera
                    this.selectedEvidence[i] = 0; // Wyzerowanie dowodu
                    this.statusEvedince[index - 1] = 0; // Zmiana statusu
                }
            }
        }

        // Ile zaznaczono dowodów
        var evidenceCounter = 0;
        for (var i = 0; i < this.selectedEvidence.length; i++) {
            if (this.selectedEvidence[i] != 0) {
                evidenceCounter++;
            }
        }

        if (evidenceCounter < 2) {
            this.ghost.classList.add("hidden");
            this.possibleGhosts.classList.add("hidden");
        }

        // Pokaż możliwe duchy
        if (evidenceCounter == 2) {
            this.ghost.classList.add("hidden");
            this.possibleGhosts.classList.remove("hidden");

            var ghostsIndex = [];
            for (var i = 0; i < this.ghosts.length; i++) {
                var ghost = this.ghosts[i];
                var counter = 0;

                // Wyszukaj możliwe duchy
                for (var j = 0; j < ghost.evidence.length; j++) {
                    for (var k = 0; k < this.selectedEvidence.length; k++) {
                        if (ghost.evidence[j] == this.selectedEvidence[k]) {
                            counter++;
                        }
                    }
                }

                // Czy są jakieś duchy
                if (counter == 2) {
                    ghostsIndex.push(i);
                }
            }

            // Pokaż duchy
            if (ghostsIndex.length > 0) {
                this.possibleGhosts.innerHTML = '<h3 class = "title">Możliwe duchy</h3><hr>';
                for (var i = 0; i < ghostsIndex.length; i++) {
                    var ghost = this.ghosts[ghostsIndex[i]];
                    var difference = ghost.evidence.filter(x => this.selectedEvidence.indexOf(x) === -1);
                    this.possibleGhosts.innerHTML += '<div><span class = "bold">Nazwa ducha: </span>' + ghost.name + '</div>';
                    this.possibleGhosts.innerHTML += '<div><span class = "bold">Brakujący dowód: </span>' + this.evidence[difference - 1].name + '</div>';
                    this.possibleGhosts.innerHTML += '<div><span class = "bold">Wyjątkowe moce: </span>' + ghost.power + '</div>';
                    this.possibleGhosts.innerHTML += '<div><span class = "bold">Słabość </span>' + ghost.weakness + '</div>';


                    if (i != ghostsIndex.length - 1) {
                        this.possibleGhosts.innerHTML += "<hr>";
                    }

                }

            }
        }

        if (evidenceCounter == 3) {
            this.possibleGhosts.classList.add("hidden");
            this.ghost.classList.remove("hidden");
            // Wyszukanie konkretnego ducha
            for (var i = 0; i < this.ghosts.length; i++) {
                var ghost = this.ghosts[i];
                var counter = 0;

                for (var j = 0; j < ghost.evidence.length; j++) {
                    for (var k = 0; k < this.selectedEvidence.length; k++) {
                        if (ghost.evidence[j] == this.selectedEvidence[k]) {
                            counter++;
                        }
                    }
                }

                if (counter == 3) {
                    this.name.innerHTML = ghost.name;
                    this.power.innerHTML = ghost.power;
                    this.weakness.innerHTML = ghost.weakness;

                    break;
                }
                else {
                    this.clearViewGhost();
                }
            }
        }
        else {
            this.clearViewGhost();
        }
    }
}

var main = new Main();
