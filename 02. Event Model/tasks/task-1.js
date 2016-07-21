/* globals $ */

/*

Create a function that takes an id or DOM element and:


*/

function solve() {
    return function (selector) {
        var element,
            setOfElements,
            i,
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

        setOfElements = element.querySelectorAll('.button, .content');

        for (i = 0; i < setOfElements.length; i += 1) {
            if (setOfElements[i].className === 'button') {
                setOfElements[i].innerHTML = 'hide';
            }
        }

        element.addEventListener('click', function (ev) {
            if (ev.target.className === 'button') {
                topmostContentElement = ev.target.nextElementSibling;
                while (topmostContentElement) {
                    if (topmostContentElement.className === 'content') {
                        break;
                    }
                    topmostContentElement = topmostContentElement.nextElementSibling;
                }
                if (!topmostContentElement) {
                    return;
                }
                if (topmostContentElement.className === 'content') {
                    if (topmostContentElement.style.display === 'none') {
                        ev.target.innerHTML = 'hide';
                        topmostContentElement.style.display = '';
                    } else {
                        ev.target.innerHTML = 'show';
                        topmostContentElement.style.display = 'none';
                    }
                }
            }
        }, false);
    };
}

module.exports = solve;
//solve('div');
