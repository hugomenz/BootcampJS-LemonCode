import { getProperty, getEquipmentList, uploadContact } from "./property-detail.api";
import { history } from '../../core/router';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyDetailsFromApiToVm } from './property-detail.mappers'
import { onUpdateField, onSubmitForm, onAddFile, onSetError, onSetFormErrors } from '../../common/helpers/element.helpers'
import { formValidation } from './property-detail.validations' 
// id seleccionado
const params = history.getParams();

Promise.all([
    getProperty(params.id),
    getEquipmentList(),
    ])
    .then( ([ property, equipments ]) => {
        const viewModelProperty = mapPropertyDetailsFromApiToVm(property[0], equipments);
        setPropertyValues(viewModelProperty);
    });

let contactData = {
    propertyId: params.id,
    email: '',
    message: '',
}

onUpdateField('email', (event => {
    let value = event.target.value;

    contactData = {
        ...contactData,
        email: value
    };

    formValidation.validateField('email', contactData.email).then(result => {
        onSetError('email', result);
    });
}));

onUpdateField('message', (event => {
    let value = event.target.value;

    contactData = {
        ...contactData,
        message: value
    };

    formValidation.validateField('message', contactData.message).then(result => {
        onSetError('message', result);
    });
}));

// navigate to next site if upload OK
const onNavigate = (isValid) => {
    if (isValid){
        window.location.href = window.location.href;
    }else {
        alert("Algo ha ido mal!")
    }
};

onSubmitForm("contact-button", () => { 
    // from login validations check if inputs are valid
    formValidation.validateForm(contactData).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            if (confirm('Seguro que desea enviar el mensaje?')) {
                console.log(contactData);
                alert('Mensaje enviado! Nos pondremos en contacto lo más pronto posible');
                uploadContact(contactData).then(isValid => {
                    onNavigate(isValid); // true / false // check if post OK 
                }); 
            }else{
                alert('Rellene por favor los campos requeridos') // NO OK
            }
        };
    });
});