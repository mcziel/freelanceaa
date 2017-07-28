$(document).ready(function()
{
	"use strict";
	
    $('#subscribe-form').validator();

    $('#subscribe-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "subscribe.php";
            var ajaxRequest;
            ajaxRequest = $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize()
            });

            ajaxRequest.done(function(response)
            {
                var responseArray = response.split('|');

                var messageAlert = responseArray[0];
                var messageText = responseArray[1];
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + messageText + '</div>';
                $('#subscribe-form').find('.messages').html(alertBox);
                $('#subscribe-form')[0].reset();
            });
            ajaxRequest.fail(function(response)
            {
                var responseArray = response.split('|');

                var messageAlert = responseArray[0];
                var messageText = responseArray[1];
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + messageText + '</div>';
                $('#subscribe-form').find('.messages').html(alertBox);
                $('#subscribe-form')[0].reset();
            });
            
            return false;

            // var messageAlert = 'alert-' + data.type;
            // var messageText = data.message;

            // var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + messageText + '</div>';
            // if (messageAlert && messageText) {
            //     $('#subscribe-form').find('.messages').html(alertBox);
            //     $('#subscribe-form')[0].reset();
            // }

            
        }
    });
});