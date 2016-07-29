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
            'border-radius': '3px'
        });

    $this.append($button);
};
