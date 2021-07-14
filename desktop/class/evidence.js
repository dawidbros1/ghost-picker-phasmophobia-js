class Evidence {
    constructor(index, name) {
        this.index = index;
        this.name = name;
    }
}

function initEvidence(evidence) {
    evidence.push(new Evidence(1, "Spirit Box"));
    evidence.push(new Evidence(2, "Odciski palców"));
    evidence.push(new Evidence(3, "Pismo ducha"));
    evidence.push(new Evidence(4, "Orb"));
    evidence.push(new Evidence(5, "EMF poziom 5"));
    evidence.push(new Evidence(6, "Mroźna temperatura"));
}