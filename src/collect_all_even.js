'use strict';

function collect_all_even(collection) {
    var result = [];

    collection.forEach(function (element) {
        if (element % 2 === 0) {
            result.push(element);
        }
    });

    return result;
}

module.exports = collect_all_even;
