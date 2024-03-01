$(() => {
    var tabButtons = $('.portable-infobox .pi-panel-scroll-wrapper .pi-section-navigation li');
    tabButtons.on('mouseenter', e => {
        console.log(e);
        e.currentTarget.click()
    });
});