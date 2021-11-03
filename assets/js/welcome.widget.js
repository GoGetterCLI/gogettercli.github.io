const greetings = ['Welcome to acei.us', 'Bienvenido a acei.us']

const welcome_loop = window.setInterval(function(){
    let selected_greeting = greetings[Math.floor(Math.random() * greetings.length)]
    document.getElementById('greetings').innerHTML = selected_greeting
    console.log('Selected greeting ' + selected_greeting)
}, 3000);
