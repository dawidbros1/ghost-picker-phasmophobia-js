const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const speech = new SpeechSynthesisUtterance();

class SpeechListener {
    constructor() {
        this.on = false
        this.dictionary = new Dictionary();

        this.microphone = {
            'on': false,
            'body': document.getElementById('microphone')
        }
    }

    init(evidenceManager, ghostManager) {
        this.evidenceManager = evidenceManager;
        this.ghostManager = ghostManager;
        this.setSettings();

        recognition.onend = () => {
            if (this.microphone.on == true) {
                setTimeout(function () {
                    recognition.start();
                }, 0)
            }
        }

        recognition.onresult = (event) => {
            let word = event.results[0][0].transcript.toLowerCase();
            let index = 'reset';
            let name = "";
            speech.text = "";
            console.log(word);

            if (this.dictionary.get('spirit_box').includes(word)) { index = 1; name = "Spirit Box" }
            else if (this.dictionary.get('fingerprints').includes(word)) { index = 2; name = "Odcisku palców" }
            else if (this.dictionary.get('book').includes(word)) { index = 3, name = "Pismo ducha" }
            else if (this.dictionary.get('orb').includes(word)) { index = 4, name = "Orby" }
            else if (this.dictionary.get('EMF').includes(word)) { index = 5, name = "EMF Poziom 5" }
            else if (this.dictionary.get('temperature').includes(word)) { index = 6, name = "Mroźna temperatura" }
            else if (this.dictionary.get('dotc').includes(word)) { index = 7, name = "Projektor" }
            else if (this.dictionary.get('reset').includes(word)) {
                this.evidenceManager.clearEvidences();
                speech.text = "Nastąpił reset wybranych dowodów";
            }

            if (index != 'reset') {
                let evidence = this.evidenceManager.findEvidenceByIndex(index);
                let result = this.evidenceManager.selectEvidence(evidence);

                if (result == false) {
                    this.speak("Nie można zaznaczyć więcej dowodów");
                    return 0;
                }

                speech.text = "Dowód" + name + "został" + evidence.selected ? "Zaznaczony" : "Odznaczony";

                if (this.evidenceManager.getSelectedEvidences().length == 3) {
                    setTimeout(() => {
                        let ghost = this.ghostManager.findGhost();

                        if (!(ghost == undefined || ghost == "undefined")) {
                            this.speak("Duchem, który nawiedział ten budynek jest: " + ghost.name);
                        }
                        else {
                            this.speak("Zaznaczone dowody nie wskazują na obecność znanego ducha!");
                        }

                    }, 2000)
                }
            }

            window.speechSynthesis.speak(speech);
        }

        this.microphone.body.addEventListener('click', () => {
            if (this.microphone.on == false) {
                this.microphone.on = true;
                this.microphone.body.setAttribute('src', 'images/microphone_on.png');
                recognition.start();
            }
            else {
                this.microphone.body.setAttribute('src', 'images/microphone_off.png');
                this.microphone.on = false;
            }
        })
    }

    speak(text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }

    setSettings() {
        recognition.interimResults = false;
        recognition.maxAlternatives = 2;
        speech.volume = 0.2;
        speech.rate = 1.5;
        speech.pitch = 1.8;
    }
}