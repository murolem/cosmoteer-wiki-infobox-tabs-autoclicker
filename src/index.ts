$(() => {
    var tabButtons = $('.portable-infobox .pi-panel-scroll-wrapper .pi-section-navigation li');
    tabButtons.on('mouseenter', e => {
        e.currentTarget.click()
    });
});