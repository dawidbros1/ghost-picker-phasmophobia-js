class Evidence {
    constructor(array) {
        this.index = array['index'];
        this.name = array['name'];
        this.img = array['img'];

        this.selected = false;
        this.rejected = false;

        this.resetButton = document.getElementById("reset")
    }

    render(html) {
        let element = document.createElement("img");
        element.setAttribute('src', 'images/' + this.img);
        element.classList.add("item")
        html.insertBefore(element, this.resetButton);
        this.html = element;
    }

    initClickAction(eManager) {
        let html = this.html;

        html.addEventListener('click', () => {
            this.select(eManager.selectedEvidences);
        });

        html.addEventListener('contextmenu', (ev) => {
            ev.preventDefault();
            this.reject(eManager.rejectedEvidences);
        });
    }

    select(selectedEvidences) {
        let intersection = selectedEvidences.includes(this.index);

        if (intersection == true) {
            this.selected = !this.selected;
            this.html.classList.toggle('redBorder');

            let indexToRemove = selectedEvidences.indexOf(this.index);
            selectedEvidences.splice(indexToRemove, 1)
        }

        if (intersection == false && selectedEvidences.length < 3) {
            this.selected = !this.selected;
            this.html.classList.toggle('redBorder');
            selectedEvidences.push(this.index);
        }
    }

    reject(rejectedEvidences) {
        this.rejected = !this.rejected;
        this.html.classList.toggle('op-30');

        if (this.rejected == true) {
            rejectedEvidences.push(this.index);
        }
        else {
            let indexToRemove = rejectedEvidences.indexOf(this.index);
            rejectedEvidences.splice(indexToRemove, 1)
        }
    }

    reset() {
        this.selected = false;
        this.rejected = false;
    }
}