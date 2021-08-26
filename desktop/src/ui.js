class UI {
    constructor() {
        this.range = document.getElementById("range");
        this.ghosts = document.getElementById("ghosts");
        this.storageName = "ghosts-opacity";
    }

    init() {
        this.setDefault();
        this.initRange();
    }

    setDefault() {
        if (storage.get(this.storageName) == null) {
            // Ustaw wartość domyślną
            storage.set(this.storageName, 75)
        }
        else {
            // Pobierz wartość ustawioną przez użytkownika
            let value = storage.get(this.storageName)
            this.range.value = value;
            this.updateRange(value)
        }
    }

    initRange() {
        this.range.addEventListener('input', (e) => {
            let value = range.value;
            this.updateRange(value)
        })
    }

    updateRange(value) {
        this.ghosts.style.opacity = value / 100;
        this.range.setAttribute('title', value + "%");
        storage.set(this.storageName, value)
    }
}