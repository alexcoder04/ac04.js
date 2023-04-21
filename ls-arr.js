
// manipulate an array saved in local storage

// add element
function lsArrAdd(key, element) {
    let existingArray = JSON.parse(localStorage.getItem(`ac04.js-arr-${key}`)) || [];
    existingArray.push(element);
    localStorage.setItem(`ac04.js-arr-${key}`, JSON.stringify(existingArray));
}

// remove element
function lsArrRemove(key, element) {
    let existingArray = JSON.parse(localStorage.getItem(`ac04.js-arr-${key}`)) || [];
    const index = existingArray.indexOf(element);
    if (index > -1) {
        existingArray.splice(index, 1);
    }
    localStorage.setItem(`ac04.js-arr-${key}`, JSON.stringify(existingArray));
}

// get full array
function lsArrGetFull(key) {
    return JSON.parse(localStorage.getItem(`ac04.js-arr-${key}`)) || [];
}
