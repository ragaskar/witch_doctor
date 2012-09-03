var WitchDoctor;
(function($) {
  var stages,
  stageRight,
  stageCenter,
  stageLeft;
  WitchDoctor = function(options) {
    stages = $('<div>'),
    stageRight = $('<div>'),
    stageCenter = $('<div>'),
    stageLeft = $('<div>');
    options.el.append(stages);
    stages.append(stageLeft).
      append(stageCenter).
      append(stageRight);
    stageCenter.css({float: 'left'});
    stageRight.css({position: 'absolute', left: '100%'});
    stages.css({'-webkit-transition':'all 1s ease-in-out'});
    stageLeft.css({position: 'absolute', left: '-100%'});
    var self = {
      show: function(el) {
        stageCenter.html(el);
      },
      transition: function(options) {
        if (options.direction === 'fromRight') {
          stages.bind('webkitTransitionEnd', function() {
            var oldRight = stageRight,
            oldLeft = stageLeft,
            oldCenter = stageCenter;
            stageCenter = oldRight;
            stageLeft = oldCenter;
            stageRight = oldLeft;
            stageCenter.css({float: 'left', position: 'static', left: '0'});
            stageLeft.css({float: 'none'});
            stageRight.css({position: 'absolute', left: '100%'});
          });
          stageRight.html(options.el);
          stages.css({'-webkit-transform': 'translate(-100%, 0)'});
        }
      },
      centerStage: function() {
        return stageCenter;
      }
    }
    return self;
  };
}(jQuery || Zepto));
