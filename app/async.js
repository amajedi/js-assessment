exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var deferred = $.Deferred();
    setTimeout(function () {
        deferred.resolve(value);
    }, 0);
    return deferred.promise();
  },

  manipulateRemoteData : function(url) {
    var deferred = $.Deferred();
    $.get(url).then(function (data) {
        if (data.hasOwnProperty('people')) {
            deferred.resolve(_.pluck(data.people, 'name').sort());
        } else {
            deferred.reject();
        }
    }).fail(function () {
        deferred.reject();
    });
    return deferred.promise();
  }
};
