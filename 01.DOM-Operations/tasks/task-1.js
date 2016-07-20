/* globals $ */

/*

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed
*/

module.exports = function solve() {

    return function (element, contents) {
        var fragment,
            i,
            tempDiv,
            shouldChange = true;

        if (arguments.length !== 2) {
            throw 'The params are not as described!';
        }

        if (typeof element === 'string') {
            element = document.getElementById(element);
            if (element == null) {
                throw 'Given ID is not present in HTML!';
            }
        } else if (!element instanceof HTMLElement) {
            throw 'Given element is not string nor HTML element!';
        }

        if (!Array.isArray(contents)) {
            throw 'Given contents are not in form of array!';
        }

        fragment = document.createDocumentFragment();
        for (i = 0; i < contents.length; i += 1) {
            tempDiv = document.createElement('div');
            if (typeof contents[i] === 'string' || typeof contents[i] === 'number') {
                tempDiv.textContent = contents[i] + '';
                fragment.appendChild(tempDiv);
            } else {
                shouldChange = false;
                throw 'Not all contents entries are number or string!';
            }
        }

        if (shouldChange) {
            element.innerHTML = '';
            element.appendChild(fragment);
        }
    };
};
