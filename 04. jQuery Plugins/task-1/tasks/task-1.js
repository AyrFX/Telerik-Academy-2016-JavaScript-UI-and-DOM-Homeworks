function solve() {
    return function (selector) {
        var $mainElement = $(selector),
            $parent = $mainElement.parent(),
            $options = $mainElement.children('option'),
            $currentOption = $('<div />').addClass('current'),
            $container = $('<div />').addClass('options-container').css('display', 'none'),
            $dropdownList = $('<div />').addClass('dropdown-list').append($mainElement);

        $mainElement.css('display', 'none').css('position', 'absolute');

        $parent.append($dropdownList);

        $dropdownList.append($currentOption);
        for (var i = 0; i < $options.length; i += 1) {
            $('<div />')
                .addClass('dropdown-item')
                .attr('data-value', 'value-' + (i + 1))
                .attr('data-index', i)
                .text('Option ' + (i + 1))
                .appendTo($container);
        }
        $dropdownList.append($container);

        var currentText = $($container.children()[0]).text();
        $currentOption.text(currentText);

        $currentOption.on('click', function () {
            if ($container.css('display') === 'none') {
                $container.css('display', '');
            } else {
                $container.css('display', 'none');
            }

        });

        $container.on('click', '.dropdown-item', function () {
            var $this = $(this);

            var currentText = $this.text(),
                currentDataValue = $this.attr('data-value');
            $currentOption.text(currentText);

            $('option:selected').removeAttr('selected');
            currentDataValue = '[value=' + currentDataValue + ']';
            $(currentDataValue).attr('selected', true);

            $container.css('display', 'none');
        });
    };
}

module.exports = solve;
