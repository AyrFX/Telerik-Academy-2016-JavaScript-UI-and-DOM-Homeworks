/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string`
*/
function solve() {
    return function (selector) {
        var $elements = $(selector);
        var $buttonsAndContents = $elements.children('.button, .content');

        if (arguments.length < 1) {
            throw Error('There is no selector given!');
        }

        if (typeof selector !== 'string') {
            throw Error('The selector should be string!');
        }

        if ($elements.length <= 0) {
            throw Error('Given selector selects no elements!');
        }

        if ($buttonsAndContents.length === 0) {
            return;
        }

        for (var i = 0; i < $buttonsAndContents.length; i += 1) {
            if ($($buttonsAndContents[i]).hasClass('button')) {
                $($buttonsAndContents[i]).text('hide');
            }
        }

        $elements.on('click', '.button', function (event) {
            var $this = $(this),
                $topmostContent = $this.next();

            event.preventDefault();
            while (!$topmostContent.hasClass('content') && !$topmostContent.hasClass('button') &&
                $topmostContent !== null) {
                $topmostContent = $topmostContent.next();
            }

            if ($topmostContent !== null && $topmostContent.hasClass('content')) {
                if ($topmostContent.css('display') === 'none') {
                    $topmostContent.css('display', '');
                    $this.text('hide');
                } else {
                    $topmostContent.css('display', 'none');
                    $this.text('show');
                }
            }
        });
    };
}

module.exports = solve;
