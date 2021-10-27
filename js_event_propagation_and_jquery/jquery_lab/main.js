$('document').ready(() => {
    //#region lab 1
    $('.shape').on('mouseover', event => {
        $(event.currentTarget).addClass('highlight');
    });
    $('.shape').on('mouseleave', event => {
        $(event.currentTarget).removeClass('highlight');
    });

    $('.shape').on('click', event => {
        className = event.currentTarget.className;
        if (className.includes('small')) {
            $(event.currentTarget).hide();
        } else if (className.includes('medium')) {
            $(event.currentTarget).removeClass('medium').addClass('small');
        } else {
            $(event.currentTarget).removeClass('large').addClass('medium');
        }
    });
    //#endregion

});