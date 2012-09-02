var WitchDoctor;
(function($) {
  var stageRight,
  stageCenter,
  stageLeft;
  WitchDoctor = function(options) {
    stageRight = $('<div>'),
    stageCenter = $('<div>'),
    stageLeft = $('<div>');
    options.el.append(stageLeft).
      append(stageCenter).
      append(stageRight);
    var self = {
      show: function(el) {
        stageCenter.html(el);
      },
      transition: function(options) {
        if (options.direction === 'fromRight') {
          stageRight.html(options.el);
        }
      },
      centerStage: function() {
        return stageCenter;
      }
    }
    return self;
  };
}(jQuery || Zepto));
