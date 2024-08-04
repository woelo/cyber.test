
     function checkPassword(event) {
            event.preventDefault();
            const userPassword = document.getElementById('password').value;
            const correctPassword = '01000001r';
            if (userPassword === correctPassword) {
                alert('You Got It,Thats The Correct Password!');
            } else {
                alert('Wrong Password. Try Again!');
            }
        }
    