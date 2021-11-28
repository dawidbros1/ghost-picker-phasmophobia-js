class Evidence {
    constructor(array) {
        this.index = array['index'];
        this.name = array['name'];
        this.img = array['img'];

        this.selected = false;
        this.rejected = false;
    }

    render(evidences) {
        let e = document.createElement("img");
        e.setAttribute('src', 'images/' + this.img);
        e.classList.add("item")
        evidences.appendChild(e);
        this.body = e;
    }

    select() {
        this.selected = !this.selected;
        this.body.classList.toggle('redBorder');
    }

    reject() {
        this.rejected = !this.rejected;
        this.body.classList.toggle('op-30');
    }

    reset() {
        this.selected = false;
        this.body.classList.remove('redBorder');

        this.rejected = false;
        this.body.classList.remove('op-30');
    }
}