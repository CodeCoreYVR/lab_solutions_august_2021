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

    //#region lab 2

    $('tbody').prepend('<tr><td>0</td><td>-</td></tr>');

    // When the form's submit button is clicked, append the text input's current value to the form message.
    $('#form-1').submit(function () {
        $('#form-message').append(
            $(this)
                .find('input[type=text]')
                .val()
        );
    });

    $('#button-1').on('click', () => {
        $("#green-container").toggle();
    });
    $('#button-2').on('click', () => {
        $("#button-message").fadeOut("slow");
    });
    $('#button-3').on('click', () => {
        $("#button-message").fadeIn("slow");
    });
    $('#button-4').on('click', () => {
        $("#green-container").slideUp("slow");
    });

    //#endregion


    //#region lab 3
    $(document).keydown(function (event) {
        if (event.key === "g") {
            $('.grey').toggle();
        }
        if (event.keyCode === 32) {
            $("#green-container").append('<div class="small blue circle shape"></div>');
        }
    });

    // Make the Form Message show the number of characters remaining
    // (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").

    $('#form-1 > input[type=text]').on('input', function () {
        let remaining = 14 - $(this).val().length;
        $('#form-message').text(`${remaining} characters remaining`);
    });

    // actually add the form validation, if you wish

    $('#form-1 > input[type=text]').attr('maxlength', 14);
    //#endregion


});