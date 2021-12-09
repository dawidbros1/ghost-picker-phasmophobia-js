class FeedbackDatabase {
    constructor() {
        this.feedback = [
            'Duchem, który nawiedzał ten budynek jest ',
            'Wykryty duch to ',
            'To miejsce zostało nawiedzone przez ducha ',
            'Daj dwie stówki, znalazłem ducha raiju ',
            'Budynek został nawiedzony przez ducha ',
            'Dobra robota! Teraz musimy tylko wyegzorcyzmować ducha ',
            'Przepadnij w czeluści piekieł duchu ',
            'Tak jak pan Jezus powiedział, przepadnij duchu nieczysty imieniem ',
            'Dwieście złotych się należy, duchem, który nawiedzał Pańską posesję jest ',
            'Jak z fakturą to trzysta złotych się należy, duchem, który nawiedzał Pańską posesję jest ',
            'Jak z fakturą to będzie trzy stówki proszę Pana, duch to  '
        ];
    }

    random() {
        let x = Math.ceil(Math.random() * 100); // 0-100
        return this.feedback[x % this.feedback.length]
    }
}