class Evidence {
    constructor(name, img) {
        this.name = name;
        this.img = img;

        this.selected = false;
        this.rejectet = false;

        // HTML STATIC
        this.resetButton = document.getElementById("reset")
    }

    setIndex(index) {
        this.index = index;
    }

    show(html) {
        let element = document.createElement("img");
        element.setAttribute('src', this.img);
        element.classList.add("item")
        html.insertBefore(element, this.resetButton);
        this.html = element;
    }

    // MOUSE CLICK

    initClickAction(eManager) {
        let html = this.html;

        html.addEventListener('click', () => {
            this.select(eManager.selectedEvidence);
        });

        html.addEventListener('contextmenu', (ev) => {
            ev.preventDefault();
            this.reject(eManager.rejectedEvidence);
        });
    }

    select(selectedEvidence) {
        let intersection = selectedEvidence.includes(this.index);

        if (intersection == true) {
            this.selected = !this.selected;
            this.html.classList.toggle('redBorder');

            let indexToRemove = selectedEvidence.indexOf(this.index);
            selectedEvidence.splice(indexToRemove, 1)
        }

        if (intersection == false && selectedEvidence.length < 3) {
            this.selected = !this.selected;
            this.html.classList.toggle('redBorder');

            selectedEvidence.push(this.index);
        }
    }

    reject(rejectedEvidence) {
        this.rejectet = !this.rejectet;
        this.html.classList.toggle('op-30');

        if (this.rejectet == true) {
            rejectedEvidence.push(this.index);
        }
        else {
            let indexToRemove = rejectedEvidence.indexOf(this.index);
            rejectedEvidence.splice(indexToRemove, 1)
        }
    }

    reset() {
        this.selected = false;
        this.rejectet = false;
    }
}