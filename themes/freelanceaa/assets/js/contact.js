$(function () {
	"use strict";

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            var ajaxRequest;

            $('#contact-form').request('onContactForm', {
                success: function() {
                    $("#contactFormMessage").fadeIn("fast");
                    $('#contact-form')[0].reset();
                }
            });

            // ajaxRequest.done(function(response)
            // {
            //     var responseArray = response.split('|');

            //     var messageAlert = responseArray[0];
            //     var messageText = responseArray[1];
            //     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + messageText + '</div>';
            //     $('#contact-form').find('.messages').html(alertBox);
            //     $('#contact-form')[0].reset();
            // });
            // ajaxRequest.fail(function(response)
            // {
            //     var responseArray = response.split('|');

            //     var messageAlert = responseArray[0];
            //     var messageText = responseArray[1];
            //     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + messageText + '</div>';
            //     $('#contact-form').find('.messages').html(alertBox);
            //     $('#contact-form')[0].reset();
            // });

            return false;
        }
    });
});