const greetings = ['Welcome.', 'Bienvenido.', 'kwa gwa;']
let selected_greeting = 0;

const welcome_loop = window.setInterval(function(){
    document.getElementById('greetings').innerHTML = greetings[selected_greeting]
    
    if (greetings.length == (selected_greeting + 1)) {
        selected_greeting = 0;
        console.log("[Debug] selected_greeting = " + selected_greeting);
    } else {
        selected_greeting += 1;
        console.log("[Debug] selected_greeting = " + selected_greeting);
    }
    
}, 3000);
