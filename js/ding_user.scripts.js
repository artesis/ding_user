(function ($) {

  Drupal.ajax.prototype.commands['ding_user_update_login'] = function (ajax, response, status) {
    $('.block-ding-user-frontend-ding-username h2').html(Drupal.t("Welcome") + '<span>' + $('.block-ding-user-frontend-ding-username #ding-user-name .content').text() + '</span>');
    return;
  };

})(jQuery);
