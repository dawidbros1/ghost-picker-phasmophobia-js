class VolumeBar {
    constructor() {
        this.range = document.getElementById("volumeBar");
        this.ghosts = document.getElementById("ghosts");
        this.storageName = "speech-volume";
        this.speech;
    }

    init(speech) {
        this.speech = speech;
        this.setDefault();
        this.initRange();
    }

    setDefault() {
        if (storage.get(this.storageName) == null) {
            storage.set(this.storageName, 75)
        }
        else {
            let value = storage.get(this.storageName)
            this.range.value = value;
            this.updateVolume(value)
        }
    }

    initRange() {
        this.range.addEventListener('input', (e) => {
            let value = this.range.value;
            this.updateVolume(value)
        })
    }

    updateVolume(value) {
        this.speech.volume = (value / 100);
        this.range.setAttribute('title', value + "%");
        storage.set(this.storageName, value)
    }
}