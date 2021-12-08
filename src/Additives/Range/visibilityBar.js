class VisibilityBar {
    constructor() {
        this.range = document.getElementById("visibilityBar");
        this.ghosts = document.getElementById("ghosts");
        this.storageName = "ghosts-opacity";
    }

    init() {
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
            this.updateVisibility(value)
        }
    }

    initRange() {
        this.range.addEventListener('input', (e) => {
            let value = this.range.value;
            this.updateVisibility(value)
        })
    }

    updateVisibility(value) {
        this.ghosts.style.opacity = value / 100;
        this.range.setAttribute('title', value + "%");
        storage.set(this.storageName, value)
    }
}