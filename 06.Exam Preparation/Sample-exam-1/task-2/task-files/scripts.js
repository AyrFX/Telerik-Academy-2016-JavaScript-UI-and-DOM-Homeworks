$.fn.tabs = function () {
    var $this = $(this)
        .css({
            'border': '1px solid black',
            'border-radius': '5px'
        }),
        $tabItems = $this.children('.tab-item'),
        $tabTitles = $this.children('.tab-item-title'),
        i;

    for (i = 0; i < $tabItems.length; i += 1) {
        $($tabItems[i])
            .css({
                'display': 'inline-block'
            })
            .children('.tab-item-content')
            .css('display', 'none')
            .children('.tab-item-title');
    }

    for (i = 0; i < $tabTitles.length; i += 1) {
        $($tabTitles[i]).css({
            'display': 'inline-block',
            'padding': '15px'
        });
    }

    /*for (i = 0; i < $tabContents.length; i += 1) {
        $tabContents[i].css({
            'display': 'none'
        });
    }*/
};
