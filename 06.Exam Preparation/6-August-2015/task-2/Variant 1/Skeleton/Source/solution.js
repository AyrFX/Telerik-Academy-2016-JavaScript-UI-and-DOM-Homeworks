
function solve() {
    $.fn.datepicker = function () {
        var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ];
        var WEEK_DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        Date.prototype.getMonthName = function () {
            return MONTH_NAMES[this.getMonth()];
        };

        Date.prototype.getDayName = function () {
            return WEEK_DAY_NAMES[this.getDay()];
        };

        // you are welcome :)
        var currentDate = new Date(),
            $this = $(this).addClass('datepicker'),
            $parent = $($this.parent()),
            $wrapper = $('<div />')
            .addClass('datepicker-wrapper'),
            $picker = $('<div />')
            .addClass('picker'),
            $controls = $('<div />')
            .addClass('controls')
            .appendTo($picker),
            $leftButton = $('<button />')
            .addClass('controls')
            .addClass('btn')
            .text('<')
            .appendTo($controls),
            $currentMonth = $('<a />')
            .addClass('controls')
            .addClass('current-month')
            .text(currentDate.getMonthName() + ' ' + currentDate.getFullYear())
            .appendTo($controls),
            $rightButton = $('<button />')
            .addClass('controls')
            .addClass('btn')
            .text('>')
            .appendTo($controls),
            /*$currentDate = $('<a />')
            .addClass('controls')
            .addClass('current-day')
            .text(currentDate.getDate() + ' ' + currentDate.getMonthName() + ' ' + currentDate.getFullYear())
            .appendTo($picker),*/
            $calendar = $('<table />')
            //.addClass('controls')
            .addClass('calendar')
            .appendTo($picker),
            $calendarHead = $('<thead />')
            .appendTo($calendar),
            $headRow = $('<tr />')
            .appendTo($calendarHead),
            i;

        $wrapper.append($this)
            .append($picker);
        $parent.append($wrapper);

        for (i = 0; i < 7; i += 1) {
            var newElement = $('<th />')
                .text(WEEK_DAY_NAMES[i])
                .appendTo($headRow);
        }

        $this.on('click', function () {
            if ($picker.css('display') == 'none') {
                $picker.css('display', '');
            } else {
                $picker.css('display', 'none');
            }
        });

        // ==================
        var date = new Date();
        console.log(date.getDayName());
        console.log(date.getMonthName());
    };
}
