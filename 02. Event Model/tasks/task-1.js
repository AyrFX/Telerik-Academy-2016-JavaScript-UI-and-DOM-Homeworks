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
            if (setOfElements[i].className === 'button') {
                setOfElements[i].innerHTML = 'hide';
            }
        }

        element.addEventListener('click', function (ev) {
            if (ev.target.className === 'button') {
                topmostContentElement = ev.nextElementSibling;
                while (topmostContentElement) {
                    if (topmostContentElement.className === 'content') {
                        break;
                    }
                    topmostContentElement = topmostContentElement.nextElementSibling;
                }
                if (topmostContentElement.className === content) {
                    if (topmostContentElement.getAttribute('display') === 'none') {
                        setOfElements[i].innerHTML = 'hide';
                        topmostContentElement.setAttribute('display', '');
                    } else {
                        setOfElements[i].innerHTML = 'show';
                        topmostContentElement.setAttribute('display', 'none');
                    }
                }
            }
        }, false);

        /*for (i = 0; i < setOfElements.length; i += 1) {
            if (setOfElements[i].className === 'content') {
                continue;
            }
            topmostContentElement = null;
            for (j = i + 1; j < setOfElements.length; j += 1) {
                if (setOfElements[j].className === 'button') {
                    topmostContentElement = null;
                    break;
                } else if (setOfElements[j].className === 'content') {
                    topmostContentElement = setOfElements[j];
                    break;
                }
            }

            if (topmostContentElement) {
                setOfElements[i].addEventListener('click', function () {
                    if (topmostContentElement.getAttribute('display') === 'none') {
                        setOfElements[i].innerHTML = 'hide';
                        topmostContentElement.setAttribute('display', '');
                    } else {
                        setOfElements[i].innerHTML = 'show';
                        topmostContentElement.setAttribute('display', 'none');
                    }
                }, false);
            }
        }*/
    };
}

module.exports = solve;
//solve('div');
