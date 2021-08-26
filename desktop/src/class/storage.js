class Storage {
    set(name, value) {
        localStorage.setItem(name, value)
    }

    get(name) {
        return localStorage.getItem(name)
    }
}