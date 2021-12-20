class SpeechListener {
    constructor() {
        this.on = false
        this.dictionary = new Dictionary();
        this.feedback = (new Database).feedback();
        this.recognition;
        this.speech;
        this.microphone = {
            'on': false,
            'body': document.getElementById('microphone')
        }

        this.range = new VolumeBar();
    }

    init(evidenceManager, ghostManager) {
        this.evidenceManager = evidenceManager;
        this.ghostManager = ghostManager;

        this.initSpeech();
        this.range.init(this.speech);
        this.initMicrophone();
    }

    initMicrophone() {
        this.microphone.body.addEventListener('click', () => {
            if (this.microphone.on == false) {
                this.microphone.on = true;
                this.microphone.body.setAttribute('src', 'images/microphone_on.png');
                this.speak("Wykrywanie mowy zostało włączone");
                this.initRecognition();
            }
            else {
                this.microphone.body.setAttribute('src', 'images/microphone_off.png');
                this.speak("Wykrywanie mowy zostało wyłączone");
                this.microphone.on = false;
                this.recognition.stop();
            }
        })
    }

    initSpeech() {
        this.speech = new SpeechSynthesisUtterance();
        this.speech.rate = 1.5;
        this.speech.pitch = 0;
    }

    initRecognition() {
        if (!('webkitSpeechRecognition' in window)) {
            console.log("API nie jest ubsługiwane");
        }
        else {
            // == Recognition == //
            this.recognition = new webkitSpeechRecognition();
            this.recognition.interimResults = false;
            this.recognition.maxAlternatives = 2;

            // == OnEnd == //
            this.recognition.onend = () => {
                if (this.microphone.on == true) {
                    setTimeout(() => {
                        this.recognition.start();
                    }, 0)
                }
            }

            // == OnResult == //
            this.recognition.onresult = (event) => {
                let word = event.results[0][0].transcript.toLowerCase();
                let index = 0;
                this.speech.text = "";
                console.log("Wypowiedzaine słowo to: " + word);

                if (this.dictionary.getSection('spirit_box').includes(word)) { index = 1; }
                else if (this.dictionary.getSection('fingerprints').includes(word)) { index = 2; }
                else if (this.dictionary.getSection('book').includes(word)) { index = 3 }
                else if (this.dictionary.getSection('orb').includes(word)) { index = 4 }
                else if (this.dictionary.getSection('EMF').includes(word)) { index = 5 }
                else if (this.dictionary.getSection('temperature').includes(word)) { index = 6 }
                else if (this.dictionary.getSection('dotc').includes(word)) { index = 7 }

                if (this.dictionary.getSection('reset').includes(word)) {
                    this.evidenceManager.clearEvidences();
                    this.speech.text = "Wybrane dowody zostały zresetowane";
                }

                if (index != 0) {
                    let evidence = this.evidenceManager.findEvidenceByIndex(index);
                    let result = this.evidenceManager.selectEvidence(evidence);

                    if (result == false) {
                        this.speak("Nie można zaznaczyć więcej dowodów");
                        return 0;
                    }

                    let status = evidence.selected ? "Zaznaczony" : "Odznaczony";
                    let e = this.evidenceManager.findEvidenceByIndex(index);
                    let name = e.output == null ? e.name : e.output;
                    this.speech.text = "Dowód " + name + "został " + status;

                    if (this.evidenceManager.getSelectedEvidences().length >= 3) {
                        setTimeout(() => {
                            let ghost = this.ghostManager.findGhost();

                            if (!(ghost == undefined || ghost == "undefined")) {
                                let ghostName = ghost.output == null ? ghost.name : ghost.output;
                                this.speak(this.feedback.random() + ghostName);
                            }
                        }, 2000)
                    }
                }

                window.speechSynthesis.speak(this.speech);
            }

            this.recognition.start();
        }
    }

    speak(text) {
        this.speech.text = text;
        window.speechSynthesis.speak(this.speech);
    }
}

function test(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1.5;
    speech.pitch = 0;
    speech.text = text;
    window.speechSynthesis.speak(speech);
}