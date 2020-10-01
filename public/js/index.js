var socket = io();

socket.on('connect', function() {
    console.log('Connected To Server');
});

socket.on('disconnect', function() {
    console.log('Server Is Down');
});


socket.on('newMessage', function(data) {
    var messageContnet = document.getElementById('message-content');
    var textNode = document.createElement('p');
        textNode.innerHTML = data.name + " :  " + data.message;
    messageContnet.appendChild(textNode);
});

var form = document.forms['submit'];
form.onsubmit = (e) => {
    e.preventDefault();
    var name = form['name'].value,
        message = form['message'].value;
    socket.emit('createMessage', {
        name: name,
        message: message
    });
}