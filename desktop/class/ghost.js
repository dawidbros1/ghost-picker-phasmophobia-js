class Ghost {
    constructor(name, power, weakness, evidence) {
        this.name = name;
        this.power = power;
        this.weakness = weakness;
        this.evidence = evidence;
    }
}

function initGhosts(ghosts) {
    // ONI
    name = "Oni";
    power = "Oni jest bardziej aktywny jeśli w pobliżu są ludzie, porusza on wtedy obiektami z dużą prędkością";
    weakness = "Będąc bardziej aktywnym sprawisz, że Oni będzie łatwiejszy do znalezienia i zidendyfikowania";
    evidence = [5, 1, 3];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Yurei
    name = "Yurei";
    power = "Yurei jest znany z wywierania silnego wpływu na ludzką psychikę";
    weakness = "Zapalania kadzidła w pokoju Yurei powoduje, że nie błąka się po lokacji przez dłuższy czas";
    evidence = [4, 3, 6];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Demon
    name = "Demon";
    power = "Demon będzie atakował częściej niż jakikolwiek inny duch";
    weakness = "Zadanie demonowi udanego pytania poprzez tabliczkę Ouija nie obniży zdrowia psychicznego użytkownika";
    evidence = [1, 3, 6];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Shade
    name = "Shade";
    power = "Nieśmiałość ducha znacznie udrudnia odnalezienie go oraz znalezienie dowodów";
    weakness = "Shade nie zacznie atakować jeśli w pobliżu jest kilka osób";
    evidence = [5, 4, 3];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Revenant
    name = "Revenant";
    power = "Prędkość Revenanta zwiększa się gdy atakuje ofiarę";
    weakness = "Ukrycie się przed nim sprawi, że będzie wolniejszy";
    evidence = [5, 2, 3];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Mara
    name = "Mara";
    power = "Instnieje duże prawdopodobieństwo, że Mara zaakuje w mroku";
    weakness = "Włączenie światła w jej otoczeniu zmniejszy szansę na atak";
    evidence = [1, 4, 6];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Jinn
    name = "Jinn";
    power = "Jinn będzie poruszał się szybciej, gdy jego ofiara jest daleko";
    weakness = "Wyłączenie źródła zasilania powstrzyma Jinna przed użyciem jego umiejętności";
    evidence = [1, 4, 5];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Banshee
    name = "Banshee";
    power = "Banshee skupia się tylko na jednej osobie";
    weakness = "Lękiem Banshee jest Krucyfiks i będzie mniej agresywna w jego obecności";
    evidence = [5, 2, 6];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Poltergeist
    name = "Poltergeist";
    power = "Poltergeist może wchodzić w interkacje z dużą przedmiotów naraz";
    weakness = "Poltergeist jest mało skuteczny w pustych pomieszczeniach";
    evidence = [1, 2, 4];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Fantom
    name = "Fantom";
    power = "Patrzenie na Fantoma znacznie obniży twoje zdrowie psychiczne";
    weakness = "Sfotografowanie Fantoma sprawi, że tymczasowo zniknie";
    evidence = [5, 4, 6];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Wraith
    name = "Wraith";
    power = "Wraith prawie nigdy nie dotyka ziemi, co oznacze, że niemożna ich śledzić poprzez odciski stóp";
    weakness = "Sól działa na Wraith negatywnie";
    evidence = [2, 6, 1];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Spirit
    name = "Spirit";
    power = "Brak";
    weakness = "Użycie kadzidła w pokoju powstrzyma ducha przed atakiem na dłuższy czas";
    evidence = [1, 2, 3];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Hantu
    name = "Hantu";
    power = "Niskie temperatury powodują szybsze poruszanie się ducha";
    weakness = "Hantu będzie poruszał się powolniej w cieplejszych obszarach";
    evidence = [2, 3, 4];
    ghosts.push(new Ghost(name, power, weakness, evidence));

    // Yokai
    name = "Yokai";
    power = "Rozmowa w jego pobliżu zdenerwuje go i zwiększy szansę na atak";
    weakness = "Podczas nawiedzania słyszy tylko najbliższy głos";
    evidence = [1, 3, 4];
    ghosts.push(new Ghost(name, power, weakness, evidence));
}

