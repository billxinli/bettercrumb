function Dashboard() {
  this.activity_feed = $('.row-fluid .span7');
  this.currently_working_on = $('.row-fluid .span5 h4 ~ div');
  this.currently_working_on_title = $('.row-fluid .span5 h4');

  this.init = function () {
    if ($('body.users-page').length == 0 || location.toString().indexOf('user/dashboard') == -1) {
      return false;
    }

    var activity_feed = this
      .activity_feed
      .find('.widget')
      .clone(true, true);

    this.activity_feed
      .empty()
      .append(this.currently_working_on_title)
      .append(this.currently_working_on);

    $('.row-fluid .span5 .widget').prepend('<h4>Log your hours...</h4>');
    $('.row-fluid .span5').append('<h4>Feed</h4>');

    var activity_feed = $('<div></div>')
      .addClass('bettercrumb-activity-feed hide')
      .append(activity_feed);

    var activity_feed_toggle_button = $('<button></button>')
      .addClass('bettercrumb-activity-feed-toggle btn')
      .html('Toggle');

    $('.row-fluid .span5')
      .append(activity_feed_toggle_button)
      .append(activity_feed);

    $('ul.stories').empty();

    var feed_div = $('.bettercrumb-activity-feed');
    $('.bettercrumb-activity-feed-toggle').click(function () {
      if (feed_div.hasClass('hide')) {
        feed_div.removeClass('hide');
      } else {
        feed_div.addClass('hide');
      }
    });


  }
}

var better_dashboard = new Dashboard();
better_dashboard.init();

//$("#myModal").modal("hide");
//TODO: Capture the request to acknowledge the modal. 