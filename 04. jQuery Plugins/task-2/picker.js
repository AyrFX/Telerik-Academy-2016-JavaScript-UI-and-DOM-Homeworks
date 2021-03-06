$.fn.colorpicker = function () {
    var $this = $(this);

    //construct colorpicker elements
    var $button = $('<div />')
        .css({
            'width': '32px',
            'height': '32px',
            'background-image': 'url("imgs/icon.jpg")',
            'background-size': '32px',
            'border': '2px solid #626262',
            'border-radius': '3px',
            'box-shadow': '3px 3px 3px #dadada'
        })
        .on('click', function () {
            $picker.css('display', '');
        }),

        $picker = $('<div />')
        .css({
            'width': '380px',
            'height': '410px',
            'background-color': '#626262',
            'border-radius': '15px',
            'box-shadow': '10px 10px 10px #c0c0c0',
            'display': 'none'
        }),

        $pickerCloseButton = $('<div/>')
        .css({
            'width': '32px',
            'height': '32px',
            'background-image': 'url("imgs/close.png")',
            'background-size': '32px',
            'margin-left': '10px',
            'margin-top': '8px',
            'display': 'inline-block'
        })
        .on('click', function () {
            $picker.css('display', 'none');
        })
        .appendTo($picker),

        $paletteImage = $('img')
        .attr('src', '"imgs/color-picker.png"')
        .css({
            'width': '256px',
            'height': '256px'
        }),

        $palette = $('<canvas/>')
        .css({
            'width': '256px',
            'height': '256px',
            /*'background-image': 'url("imgs/color-picker.png")',
            'background-size': '256px',*/
            'border-radius': '50px',
            'position': 'absolute',
            'margin-left': '15px',
            'margin-top': '40px',
            'display': 'inline-block',
            'cursor': 'url("imgs/cursor.png") 0 28, pointer'
        })
        .on('click', function () {
            $selectedColor.css({
                'background-color': ''
            });
        })
        .appendTo($picker),

        $valuesContainer = $('<div/>')
        .css({
            'width': '300px',
            'height': '55px',
            // 'background-color': 'red',
            'position': 'absolute',
            'margin-top': '315px',
            'display': 'inline-block'
        })
        .appendTo($picker),

        $hexContainer = $('<input type="text" placeholder="HEX" readonly/>')
        .css({
            'width': '119px',
            'margin-top': '1px'
        })
        .appendTo($valuesContainer),

        $rgbContainer = $('<input type="text" placeholder="RGB" readonly/>')
        .css({
            'width': '119px',
            'margin-top': '5px',
            'display': 'block'
        })
        .appendTo($valuesContainer),

        $selectedColor = $('<div />')
        .css({
            'position': 'absolute',
            'width': '119px',
            'height': '53px',
            'margin-top': '-50px',
            'margin-left': '180px',
            'display': 'block',
            'background-color': 'black'
        })
        .appendTo($valuesContainer),
        imageContext = $palette.get().getContext('2d');

    $this.append($button)
        .append($picker);

    imageContext.drawImage($paletteImage.get(), 0, 0);
}
