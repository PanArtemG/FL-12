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

const emailDB = {
    user: 'user@gmail.com',
    admin: 'admin@gmail.com'
};

const passDB = {
    user: 'UserPass',
    admin: 'AdminPass'
};

let email = prompt('Enter yours email', "user@gmail.com");
let pass = null;
let status = false;

if (!email) {
    alert('Canceled')
} else if (email.length < 5) {
    alert('I don\'t know any emails having name length less than 5 symbols')
} else if (email.match(/@/)) {
    if (email === DB.user.email) {
        pass = prompt('Enter yours password', 'UserPass');
        if (!pass) {
            alert('Canceled')
        } else if (pass === DB.user.pass) {
            status = confirm('Do you want to change your password?');
            console.log(status);
            if (!status) {
                alert('You have failed the change.');
            } else {
                pass = prompt('Enter yours password', 'UserPass');
                if (!pass) {
                    alert('Canceled')
                } else if (pass === DB.user.pass) {
                    pass = prompt('Enter NEW password', 'Password');
                    if (!pass) {
                        alert('Canceled')
                    } else if (pass.length < 6) {
                        alert('It’s too short password. Sorry.')
                    } else if (pass.length >= 6) {
                        let confirmPass = prompt('Enter your NEW password again', 'Password');
                        if ( pass === confirmPass) {
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
        pass = prompt('Enter yours password', 'UserPass');
        if (!pass) {
            alert('Canceled')
        } else if (pass === DB.admin.pass) {
            status = confirm('Do you want to change your password?');
            console.log(status);
            if (!status) {
                alert('You have failed the change.');
            } else {
                pass = prompt('Enter yours password', 'AdminPass');
                if (!pass) {
                    alert('Canceled')
                } else if (pass === DB.admin.pass) {
                    pass = prompt('Enter NEW password', 'Password');
                    if (!pass) {
                        alert('Canceled')
                    } else if (pass.length < 6) {
                        alert('It’s too short password. Sorry.')
                    } else if (pass.length >= 6) {
                        let confirmPass = prompt('Enter your NEW password again', 'Password');
                        if ( pass === confirmPass) {
                            DB.admin.pass = confirmPass;
                            alert('You have successfully changed your password.')
                        } else {
                            alert('You wrote the wrong password.')
                        }
                    }
                }
            }
        }
    }
        } else {
    alert('I don’t know you')
}