const greetings = ['Welcome to acei.us', 'Bienvenido a acei.us']
let selected_greeting = 0;

const welcome_loop = window.setInterval(function(){
    document.getElementById('greetings').innerHTML = greetings[selected_greeting]
    selected_greeting += 1;
    if (selected_greeting > greetings.length) {
        selected_greeting = 0;
        console.log('Restarted Greeting Loop')
    }
    console.log('Selected greeting ' + (selected_greeting + 1))
}, 3000);
