/* globals $ */

/*

Create a function that takes an id or DOM element and:


*/

function solve() {
    return function (selector) {
        var element,
            setOfElements,
            i, j,
            topmostContentElement;

        if (typeof selector === 'string') {
            element = document.getElementById(selector);
            if (!element) {
                throw Error('Given selector does not exsists!');
            }
        } else if (selector instanceof HTMLElement) {
            element = selector;
        } else {
            throw Error('Not valid DOM element or selector is provided!');
        }

        setOfElements = document.querySelectorAll('.button, .content');

        for (i = 0; i < setOfElements.length; i += 1) {
            if (setOfElements[i].classList.contains('button')) {
                setOfElements[i].innerHTML = 'hide';
            }
        }

        for (i = 0; i < setOfElements.length; i += 1) {
            if (setOfElements[i].classList.contains('content')) {
                continue;
            }
            topmostContentElement = null;
            for (j = i + 1; j < setOfElements.length; j += 1) {
                if (setOfElements[j].classList.contains('button')) {
                    topmostContentElement = null;
                    break;
                } else if (setOfElements[j].classList.contains('content')) {
                    topmostContentElement = setOfElements[j];
                    break;
                }
            }

            if (topmostContentElement) {
                setOfElements[i].addEventListener('click', function () {
                    if (topmostContentElement.attr('display') === '') {
                        setOfElements[i].innerHTML = 'show';
                        topmostContentElement.attr('display', 'none');
                    } else if (topmostContentElement.attr('display') === 'none') {
                        setOfElements[i].innerHTML = 'hide';
                        topmostContentElement.attr('display', '');
                    }
                });
            }
        }
    };
}

module.exports = solve;
//solve('div');
