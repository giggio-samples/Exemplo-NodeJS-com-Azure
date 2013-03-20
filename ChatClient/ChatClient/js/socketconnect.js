(function() {
  var show;

  $(function() {
    var socket;
    socket = io.connect("http://testeazuresummit.azurewebsites.net/");
    socket.on('news', function(data) {
      return show(data);
    });
    return $('#btn').on('click', function() {
      var inputmsg, msg;
      inputmsg = $('#msg');
      msg = inputmsg.val();
      inputmsg.val('');
      return socket.emit('message', msg);
    });
  });

  show = function(msg) {
    return $('#messages').append("<li>" + msg + "</li>");
  };

}).call(this);
