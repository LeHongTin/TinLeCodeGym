var login = prompt("login", '');
        var message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : 'No login';
        alert(message);