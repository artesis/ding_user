(function($) {

Drupal.behaviors.ding_user = {
  attach: function (context, settings) {
    // Not ajaxified form.
    if (typeof(settings.ajax) == 'undefined') {
      return;
    }

    $('#edit-name--2').attr('placeholder', Drupal.t("Loan- or card-number"));
    $('#edit-pass--2').attr('placeholder', Drupal.t("Pincode"));
	
    $('.ding-user-login input', context).keyup(function(e) {
      // Handle "enter" key.
      if (e.which == 13) {
        var id = $('.form-submit', context).attr('id');
        var element = $('.form-submit', context).get(0);
        if (typeof(settings.ajax[id]) == 'undefined') {
          // There is no ajax settings for given button.
          return;
        }
        var ajax_settings = settings.ajax[id];
        var ajax = (typeof(Drupal.ajax[id]) == 'undefined') ? new Drupal.ajax(id, element, ajax_settings) : Drupal.ajax[id];

        // Trigger form submition.
        $(ajax.element).trigger(ajax_settings.event);
      }
    });
  }
};

})(jQuery);
