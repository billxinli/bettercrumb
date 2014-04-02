function Dashboard() {
  this.activity_feed = $('.row-fluid .span7');
  this.currently_working_on = $('.row-fluid .span5 h4 ~ div');
  this.currently_working_on_title = $('.row-fluid .span5 h4');

  this.init = function () {
    var activity_feed = this.activity_feed.find('.widget').clone(true, true);
    this.activity_feed.empty();
    this.activity_feed.append(this.currently_working_on_title)
    this.activity_feed.append(this.currently_working_on);

    $('.row-fluid .span5 .widget').prepend('<h4>Log your hours...</h4>');
    $('.row-fluid .span5').append('<h4>Feed</h4>');

    var activity_feed_hide_link = $('<div></div>').addClass('bettercrumb-activity-feed hide').append(activity_feed);

    var activity_feed_show_link = $('<button></button>').addClass('bettercrumb-activity-feed-show btn').html('Toggle');

    $('.row-fluid .span5').append(activity_feed_show_link);

    $('.row-fluid .span5').append(activity_feed_hide_link);

    var shit_show = $('.bettercrumb-activity-feed');

    $('.bettercrumb-activity-feed-show').click(function () {
      if (shit_show.hasClass('hide')) {
        shit_show.removeClass('hide');
      } else {
        shit_show.addClass('hide');

      }
    })

  }
}

var better_dashboard = new Dashboard();
better_dashboard.init();

$("#myModal").modal("hide");