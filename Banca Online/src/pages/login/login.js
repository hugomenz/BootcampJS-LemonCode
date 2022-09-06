import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers'
import { isValidLogin } from './login.api' 
import { formValidation } from './login.validations' 

let login = {
    user: '',
    password: '',
};

onUpdateField('user', (event) => {
    const value = event.target.value;

    login = {
        ...login,
        user: value 
    };

    formValidation.validateField('user', login.user).then(result => {
        onSetError('user', result);
    });
});

onUpdateField('password', (event) => {
    const value = event.target.value;
    login = {
        ...login,
        password: value 
    };

    
    formValidation.validateField('user', login.user).then(result => {
        onSetError('password', result);
    });
});

const onNavigate = isValid => {
    if (isValid){
        history.pushState(routes.accountList);
    }else {
        alert("Usuario y/o contraseña no validos")
    }
}

onSubmitForm("login-button", () => {
    formValidation.validateForm(login).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            isValidLogin(login).then(isValid => {
                console.log({ isValid }); // true / false
            });
        }
    });
});