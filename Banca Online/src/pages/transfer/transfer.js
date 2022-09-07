import { setAccountOptions } from './transfer.helpers';
import { history, routes } from '../../core/router'
import { getAccountList } from '../account-list/account-list.api';
import { formValidation } from './transfer.validations' 
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers'
import { regTransfer } from './transfer.api'
import { getAccount  } from '../account/account.api';


const params = history.getParams();
//let actualAccount = 
getAccountList().then(accountList => {
    setAccountOptions(accountList, params.id);
    
});

let transfer = {
    idAccount: params.id,
    nameAccount: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    transferDate: '',
    email: '',
}

getAccount(params.id).then(apiAccount => { 
    transfer = {
        ...transfer,
        nameAccount: apiAccount.name,
    }
});


onUpdateField('iban', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        iban: value 
    };

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        name: value 
    };

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        amount: value 
    };

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        concept: value 
    };

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        notes: value 
    };

    formValidation.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
    });
});

// ##########################################################
// onSetError se modificó en el element.helpers
// si el id es day, month o year actua de una forma especial
// Asi soluciono el problema con el error del mensaje.
// #########################################################

onUpdateField('day', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        day: value ,
        transferDate: `${transfer.day}/${transfer.month}/${transfer.year}`,
    };

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        month: value ,
        transferDate: `${transfer.day}/${transfer.month}/${transfer.year}`,
    };

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        year: value ,
        transferDate: `${transfer.day}/${transfer.month}/${transfer.year}`,
    };

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
        //console.log(result);
    });
});

onUpdateField('email', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        email: value 
    };

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});

const onNavigate = (isValid) => {
    if (Boolean(isValid)){
        history.push(routes.accountList);
    }else {
        alert("Transferecia no realizada")
    }
};


onSubmitForm("transfer-button", () => {
    // from login validations check if inputs are valid

    let transferValidation = {
        iban: transfer.iban,
        name: transfer.name,
        amount: transfer.amount,
        concept: transfer.concept,
        notes: transfer.notes,
        day: transfer.day,
        month: transfer.month,
        year: transfer.year,
        email: transfer.email,
    }

    formValidation.validateForm(transferValidation).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            // check from the server if credentials are OK
            isValidLogin(transfer).then(isValid => {
                onNavigate(isValid); // true / false
            });
        }
    });
});


// en el onSubmitForm vas a crear un objeto con los datos adicionales:
// idAccount, nameAccount y demás cosas
// El objeto que le pasas
// ir a la sesion 1 y ver la explicaciuon del validateForm
// FALTA
// validad amount no simbolos no letras
// NO MANDA NADA SI EL FORMULARIO ENTEREO NO FUNCIONA!!


// ES9721008984150200000948
// ES9721008984150200000948
// ES5421008984170200001042
// ES0721004305712200076760
// ES8821008984110200004992
// ES6021004305702200076534