$ ->
  socket = io.connect("http://testeazuresummit.azurewebsites.net/")
  socket.on 'news', (data) -> show(data)
  $('#btn').on 'click', ->
    inputmsg = $('#msg')
    msg = inputmsg.val()
    inputmsg.val ''
    socket.emit 'message', msg
show = (msg) ->
  $('#messages').append "<li>#{msg}</li>"