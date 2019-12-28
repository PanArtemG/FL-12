const DB = {
    user: {
        email: 'user@gmail.com',
        pass: 'UserPass'
    },
    admin: {
        mail: 'admin@gmail.com',
        pass: 'AdminPass'
    }
};
let minLengthEmail = 5;
let minLengthPass = 6;


let email = prompt('Enter yours email', 'user@gmail.com');

if (!email) {
    alert('Canceled')
} else if (email.length < minLengthEmail) {
    alert('I don\'t know any emails having name length less than 5 symbols')
} else if (email === DB.user.email) {
    let pass = prompt('Enter yours password', 'UserPass');
    if (!pass) {
        alert('Canceled')
    } else if (pass !== DB.user.pass) {
        alert('Wrong password')
    } else if (pass === DB.user.pass) {
        let check = confirm('Do you want to change your password?');
        if (!check) {
            alert('You have failed the change.');
        } else {
            let pass = prompt('Enter yours password', 'UserPass');
            if (!pass) {
                alert('Canceled')
            } else if (pass === DB.user.pass) {
                pass = prompt('Enter NEW password', 'Password');
                if (!pass) {
                    alert('Canceled')
                } else if (pass.length < minLengthPass) {
                    alert('It’s too short password. Sorry.')
                } else if (pass.length >= minLengthPass) {
                    let confirmPass = prompt('Enter your NEW password again', 'Password');
                    if (pass === confirmPass) {
                        DB.user.pass = confirmPass;
                        alert('You have successfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            }
        }
    }
} else if (email === DB.admin.mail) {
    pass = prompt('Enter yours password', 'AdminPass');
    if (!pass) {
        alert('Canceled')
    } else if (pass !== DB.admin.pass) {
        alert('Wrong password')
    } else if (pass === DB.admin.pass) {
        let check = confirm('Do you want to change your password?');
        if (!check) {
            alert('You have failed the change.');
        } else {
            let pass = prompt('Enter yours password', 'AdminPass');
            if (!pass) {
                alert('Canceled')
            } else if (pass === DB.admin.pass) {
                pass = prompt('Enter NEW password', 'Password');
                if (!pass) {
                    alert('Canceled')
                } else if (pass.length < minLengthPass) {
                    alert('It’s too short password. Sorry.')
                } else if (pass.length >= minLengthPass) {
                    let confirmPass = prompt('Enter your NEW password again', 'Password');
                    if (pass === confirmPass) {
                        DB.admin.pass = confirmPass;
                        alert('You have successfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            }
        }
    }
} else {
    alert('I don’t know you')
}