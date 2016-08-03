function solve() {
    return function () {
        $.fn.listview = function (data) {
            var $this = $(this),
                templateId = $this.attr('data-template'),
                $textTemplate = $('#' + templateId),
                template = handlebars.compile($textTemplate.html()),
                result = '',
                i;

            for (i = 0; i < data.length; i += 1) {
                result += template(data[i]);
            }

            $this.html(result);
        };
    };
}

module.exports = solve;
