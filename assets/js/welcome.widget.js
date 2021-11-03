const greetings = ['Welcome to acei.us', 'Bienvenido a acei.us']

const welcome_loop = window.setInterval(function(){
    document.getElementById('greetings').innerHTML = Math.floor((Math.random() * greetings.length) + 1)
}, 5000);
