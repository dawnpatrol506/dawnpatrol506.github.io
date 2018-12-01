$(document).ready(function () {
    $('.tabs').tabs();
    $('.collapsible').collapsible();

    $('.tab').on('click', function (e) {
        let tab = $(this).attr('data-name');
        let about = $('#about');
        let portfolio = $('#portfolio');
        let contact = $('#contact');

        switch (tab) {
            case 'about':
                portfolio.hide();
                contact.hide();
                about.show();
                break;
            case 'portfolio':
                contact.hide();
                about.hide();
                portfolio.show();
                break;
            case 'contact':
                about.hide();
                portfolio.hide();
                contact.show();
                break;
        }
    })
})