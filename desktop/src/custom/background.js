class Background {
    constructor() {
        this.body = document.getElementsByTagName("body")[0];
        this.storageName = "background-image";
        this.selectBox = document.getElementById("select-bgi");
        this.window = document.getElementById("bgi-window");
        this.buttons = document.querySelectorAll("#bgi-window button");

        this.bgiInput = document.getElementById("bgi-input");
        this.basicImage = "./images/bgi.jpg";
    }

    init() {
        this.load();
        this.selectBox.addEventListener("click", () => {
            this.window.classList.toggle('hidden')
        })

        this.initButtonsClick();
    }

    initButtonsClick() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', () => {
                let action = this.buttons[i].getAttribute('data-action')

                switch (action) {
                    case 'ok': {
                        let url = this.bgiInput.value;

                        if (url != "") {
                            this.change(url);
                        }

                        break;
                    }
                    case 'restore': {
                        this.change(this.basicImage);
                        break;
                    }
                }

                this.bgiInput.value = "";
                this.window.classList.toggle('hidden')
            })
        }
    }

    change(url) {
        storage.set(this.storageName, url)
        this.load();
    }

    load() {
        if (storage.get(this.storageName) != null) {
            this.body.style.backgroundImage = `url(${storage.get(this.storageName)})`
        }
    }

    clear() {
        storage.clear(this.storageName);
    }
}