/* globals $ */

/*
Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, []
*/

function solve() {
    return function (selector, count) {
        var $rootElement = $(selector),
            $ulElement;

        if (selector !== selector + '') {
            throw Error('The selector must be a string!');
        }

        if ($rootElement.length < 1) {
            return;
        }

        if (arguments.length < 2) {
            throw Error('There is no enought parameters given!');
        }

        if (!!(+count) === false) {
            throw Error('The count parameter is not a number!');
        }

        if (+count < 0) {
            throw Error('Count parameter can not be less than 0!');
        }

        $ulElement = $('<ul>');
        $ulElement.addClass('items-list');
        for (var i = 0; i < +count; i += 1) {
            var $liElement = $('<li>');

            $liElement.addClass('list-item');
            $liElement.text('List item #' + i);
            $liElement.appendTo($ulElement);
        }

        $ulElement.appendTo($rootElement);
    };
}

module.exports = solve;
