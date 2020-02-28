function sort(array) {
    let tmp;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

exports.min = function min(array) {
    if (!Array.isArray(array) || array.length <= 0) {
        return 0;
    } else {
        sort(array);
        return array[0];
    }
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length <= 0) {
        return 0;
    } else {
        sort(array);
        return array[array.length - 1];
    }
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length <= 0) {
        return 0;
    } else {
        let count = 0;
        for (const i of array) {
            count += i;
        }
        return count / array.length;
    }
};
