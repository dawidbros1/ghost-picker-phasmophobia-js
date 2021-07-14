function zerosArray(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = 0;
    }

    return array;
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}