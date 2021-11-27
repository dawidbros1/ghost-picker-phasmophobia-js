const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const speech = new SpeechSynthesisUtterance();

class SpeechListener {
    constructor() {
        this.on = false
        this.dictionary = new Dictionary();

        this.microphone = {
            'on': false,
            'icon': document.getElementById('microphone')
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
            let index = 'empty';
            let name = "";
            let status = "";
            speech.text = "";
            console.log(word);

            if (this.dictionary.get('spirit_box').includes(word)) { index = 0; name = "Spirit Box" }
            else if (this.dictionary.get('fingerprints').includes(word)) { index = 1; name = "Odcisku palców" }
            else if (this.dictionary.get('book').includes(word)) { index = 2, name = "Pismo ducha" }
            else if (this.dictionary.get('orb').includes(word)) { index = 3, name = "Orby" }
            else if (this.dictionary.get('EMF').includes(word)) { index = 4, name = "EMF Poziom 5" }
            else if (this.dictionary.get('temperature').includes(word)) { index = 5, name = "Mroźna temperatura" }
            else if (this.dictionary.get('dotc').includes(word)) { index = 6, name = "Projektor" }
            else if (this.dictionary.get('reset').includes(word)) {
                this.evidenceManager.resetButton.click();
                speech.text = "Nastąpił reset wybranych dowodów";
            }

            if (index != 'empty') {
                status = !this.evidenceManager.evidences[index].selected ? "Zaznaczony" : "Odznaczony";

                if (status == "Zaznaczony" && this.evidenceManager.selectedEvidences.length > 2) {
                    speech.text = "Odmowa wykonania akcji: Została zaznaczona maksymalna ilość dowodów";
                    window.speechSynthesis.speak(speech);
                    return 0;
                }

                this.evidenceManager.evidences[index].select(this.evidenceManager.selectedEvidences);
                this.ghostManager.showGhosts();
                speech.text = "Dowód" + name + "został" + status;

                if (this.evidenceManager.selectedEvidences.length == 3) {
                    setTimeout(() => {
                        let ghost = this.ghostManager.findGhost();

                        if (!(ghost == undefined || ghost == "undefined")) {
                            speech.text = "Duchem, który nawiedział ten budynek jest: " + ghost.name;
                            window.speechSynthesis.speak(speech);
                        }
                        else {
                            speech.text = "Zaznaczone dowody nie wskazują na obecność znanego ducha!";
                            window.speechSynthesis.speak(speech);
                        }

                    }, 2000)
                }
            }

            window.speechSynthesis.speak(speech);
        }

        this.microphone.icon.addEventListener('click', () => {
            if (this.microphone.on == false) {
                this.microphone.on = true;
                this.microphone.icon.setAttribute('src', 'images/microphone_on.png');
                recognition.start();
            }
            else {
                this.microphone.icon.setAttribute('src', 'images/microphone_off.png');
                this.microphone.on = false;
            }
        })
    }

    setSettings() {
        recognition.interimResults = false;
        recognition.maxAlternatives = 2;
        speech.volume = 0.2;
        speech.rate = 1.5;
        speech.pitch = 1.8;
    }
}