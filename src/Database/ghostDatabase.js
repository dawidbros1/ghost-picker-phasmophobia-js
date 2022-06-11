class GhostDatabase {
    constructor() {
        this.ghosts = [{
            'name': 'Spirit',
            'power': 'Brak',
            'weakness': 'Użycie kadzidła w pokoju powstrzyma ducha przed atakiem na dłuższy czas',
            'evidences': [5, 1, 3]
        },
        {
            'name': 'Wraith',
            'power': 'Wraith prawie nigdy nie dotyka ziemi, co oznacze, że niemożna ich śledzić poprzez odciski stóp',
            'weakness': 'Sól działa na Wraith negatywnie',
            'evidences': [5, 1, 7]
        },
        {
            'name': 'Fantom',
            'power': 'Patrzenie na Fantoma znacznie obniży twoje zdrowie psychiczne',
            'weakness': 'Sfotografowanie Fantoma sprawi, że tymczasowo zniknie',
            'evidences': [1, 2, 7]
        },
        {
            'name': 'Poltergeist',
            'power': 'Poltergeist może wchodzić w interkacje z dużą przedmiotów naraz',
            'weakness': 'Poltergeist jest mało skuteczny w pustych pomieszczeniach',
            'evidences': [1, 2, 3]
        },
        {
            'name': 'Banshee',
            'power': 'Banshee skupia się tylko na jednej osobie',
            'weakness': 'Krzyki Banshee słychać czasami przy użyciu mikrofonu parabolicznego',
            'evidences': [2, 4, 7]
        },
        {
            'name': 'Jinn',
            'power': 'Jinn będzie poruszał się szybciej, gdy jego ofiara jest daleko',
            'weakness': 'Wyłączenie źródła zasilania powstrzyma Jinna przed użyciem jego umiejętności',
            'evidences': [5, 2, 6]
        },
        {
            'name': "Mara",
            'power': "Instnieje duże prawdopodobieństwo, że Mara zaakuje w mroku",
            'weakness': "Włączenie światła w jej otoczeniu zmniejszy szansę na atak",
            'evidences': [1, 4, 3]
        },
        {
            'name': "Revenant",
            'power': "Prędkość Revenanta zwiększa się gdy atakuje ofiarę",
            'weakness': "Ukrycie się przed nim sprawi, że będzie wolniejszy",
            'evidences': [4, 3, 6],
            'output': "Rewenant"
        },
        {
            'name': "Shade",
            'power': "Nieśmiałość ducha znacznie udrudnia odnalezienie go oraz znalezienie dowodów",
            'weakness': "Shade nie zacznie atakować jeśli w pobliżu jest kilka osób",
            'evidences': [5, 3, 6]
        },
        {
            'name': "Demon",
            'power': "Demony inicjują polowania częściej niż inne duchy",
            'weakness': "Demony boją się krucyfuksu i będą mniej agresywne w jego pobliżu",
            'evidences': [2, 3, 6]
        },
        {
            'name': "Yurei",
            'power': "Yurei jest znany z wywierania silnego wpływu na ludzką psychikę",
            'weakness': "Zapalania kadzidła w pokoju Yurei powoduje, że nie błąka się po lokacji przez dłuższy czas",
            'evidences': [4, 6, 7],
            'output': "yurej"
        },
        {
            'name': "Oni",
            'power': "Oni jest bardziej aktywny jeśli w pobliżu są ludzie, porusza on wtedy obiektami z dużą prędkością",
            'weakness': "Będąc bardziej aktywnym sprawisz, że Oni będzie łatwiejszy do znalezienia i zidendyfikowania",
            'evidences': [5, 6, 7]
        },
        {
            'name': "Hantu",
            'power': "Niskie temperatury powodują szybsze poruszanie się ducha",
            'weakness': "Hantu będzie poruszał się powolniej w cieplejszych obszarach",
            'evidences': [2, 4, 6]
        },
        {
            'name': "Yokai",
            'power': "Rozmowa w jego pobliżu zdenerwuje go i zwiększy szansę na atak",
            'weakness': "Podczas nawiedzania słyszy tylko najbliższy głos",
            'evidences': [1, 4, 7],
            'output': 'Yoka i'
        },
        {
            'name': "Goryo",
            'power': "Goryo zwykle widoczny jest przez aparat tylko wtedy, gdy w pobliżu nie ma ludzi.",
            'weakness': "Rzadko widuje się je z dala od miejsca śmierci",
            'evidences': [5, 2, 7]
        },
        {
            'name': "Myling",
            'power': "Myling znany jest z cichego zachowania podczas polowania.",
            'weakness': "Mylingi częściej wydają paranormalne dźwięki",
            'evidences': [5, 2, 3],
            'output': "majling"
        },
        {
            'name': "Onryo",
            'power': "Zgaszenie płomienie może sprowokować atak Onryo",
            'weakness': "Gdy jest zagrożony duch będzie mniej skłonny do polowania",
            'evidences': [1, 4, 6]
        },
        {
            'name': "The Twins",
            'power': "Każdy z bliźniaków może się rozgniewać i zaatakować swoją ofiarę",
            'weakness': "Często wchodzą w interakcje z otoczeniem w tym samym czasie",
            'evidences': [5, 1, 6],
            'output': "de tłins"
        },
        {
            'name': "Raiju",
            'power': "Raiju pobiera energię z pobliskich urządzeń elektrycznych dzięki czemu porusza się szybciej",
            'weakness': "Raiju nieustannie zakłuca działanie sprzętu elektronicznego ułatwiając śledzenie podczas ataku",
            'evidences': [5, 4, 7],
            'output': 'rajdżu'
        },
        {
            'name': "Obake",
            'power': "Podczas interkacji z otoczeniem Obake rzadko pozostawia ślady",
            'weakness': "Czasami ten duch zmienia kształt, pozostawiając po sobie unikalne dowody",
            'evidences': [5, 2, 4],
            'output': 'obak e'
        },
        {
            'name': "Mimik",
            'power': "Nie jesteśmy świadomi pewni do czego zdolny jest ten duch, bądź ostrożny",
            'weakness': "W kilku raportach odnotowane Orby w pobliżu naśladowców",
            'evidences': [1, 2, 6, 4],
        },
        {
            'name': "Moroi",
            'power': "Im słabsze są jego ofiary tym silniejszy Moroi się staje",
            'weakness': "Morai cierpią na hipersomnia, więc słabną na dłuszczy czas",
            'evidences': [1, 3, 6],
        },
        {
            'name': "Deagen",
            'power': "Deogen nieustatnie wyczuwa żywych. Możesz uciekać, ale nie możesz się ukryć",
            'weakness': "Deogen wymaga duzo energi, aby się uformowac i porusza się bardzo powoli",
            'evidences': [1, 3, 7],
        },
        {
            'name': "Thaye",
            'power': "Po wkroczeniu do lolacji Thaye stanie się bardzo katywny i zwinny",
            'weakness': "Thaye z czasem słabnie, co czyni słabszym, wolniejszym i mniej agresywnym",
            'evidences': [4, 3, 7],
        }
        ];
    }

    get() {
        var ghosts = []

        this.ghosts.forEach(data => {
            ghosts.push(new Ghost(data));
        });

        return ghosts;
    }
}