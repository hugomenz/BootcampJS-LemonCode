import { onUpdateField, onSubmitForm, onAddFile, onSetError, onSetFormErrors } from '../../common/helpers/element.helpers'
import { uploadProperty } from './upload-property.api'
import 
{ onAddFeature, 
    onRemoveFeature, 
    getAllChildsId, 
    setCheckboxList, 
    setOptionList,
    getSelectedCheckbox, 
    onAddImage,
    getAllImages,
    getIdFromSelectedNameOption} 
    from './upload-property.helpers'

import { getEquipmentList } from "../property-detail/property-detail.api";
import { getSaleTypeList, getProvinceList } from '../property-list/property-list.api'
import { history, routes } from '../../core/router'
import { formValidation } from './upload-property.validations' 
import { mapPropertyDataFromVmToApi, getErrorMessages } from './upload-property.mappers'
let apiProvinceList = []; 

Promise.all(
    [ 
        getSaleTypeList(), getProvinceList(), getEquipmentList()
    ])
    .then(([saleTypeList, provinceList, equipmentList]) =>{
        apiProvinceList = provinceList;

        setCheckboxList(saleTypeList, 'saleTypes');
        setOptionList(provinceList, "province", 'Provincia');
        setCheckboxList(equipmentList, 'equipments');

        
    });

    
let generalData = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypeIds: [],
    address: '',
    city: '',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [], // array
    equipmentIds: [], // checkbox
    images: [],
}

onUpdateField('title', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        title: value
    };

    formValidation.validateField('title', generalData.title).then(result => {
        onSetError('title', result);
    });
}));

onUpdateField('notes', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        notes: value
    };

    formValidation.validateField('notes', generalData.notes).then(result => {
        onSetError('notes', result);
    });
}));

onUpdateField('email', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        email: value
    };
    
    formValidation.validateField('email', generalData.email).then(result => {
        onSetError('email', result);
    });
}));

onUpdateField('phone', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        phone: value
    };

    formValidation.validateField('phone', generalData.phone).then(result => {
        onSetError('phone', result);
    });
}));

onUpdateField('price', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        price: value
    };

    formValidation.validateField('price', generalData.price).then(result => {
        onSetError('price', result);
    });
}));

onUpdateField('saleTypes', (() => {

    generalData = {
        ...generalData,
        saleTypeIds: getSelectedCheckbox('saleTypes')
    };

    formValidation.validateField('price', generalData.saleTypeIds).then(result => {
        onSetError('price', result);
    }); 
}));

onUpdateField('address', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        address: value
    };

    formValidation.validateField('address', generalData.address).then(result => {
        onSetError('address', result);
    });
}));

onUpdateField('city', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        city: value
    };

        formValidation.validateField('city', generalData.city).then(result => {
        onSetError('city', result);
    });
}));

onUpdateField('province', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        provinceId: value
    };

    formValidation.validateField('province', generalData.provinceId).then(result => {
        onSetError('provinceId', result);
    });
}));

onUpdateField('squareMeter', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        squareMeter: value
    };

    formValidation.validateField('squareMeter', generalData.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
}));

onUpdateField('rooms', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        rooms: value
    };

    formValidation.validateField('rooms', generalData.rooms).then(result => {
        onSetError('rooms', result);
    });
}));

onUpdateField('bathrooms', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        bathrooms: value
    };

    formValidation.validateField('bathrooms', generalData.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
}));

onUpdateField('locationUrl', (event => {
    let value = event.target.value;

    generalData = {
        ...generalData,
        locationUrl: value
    };

    formValidation.validateField('locationUrl', generalData.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
}));

onUpdateField('newFeature', (event => {
    let value = event.target.value

    onSubmitForm('insert-feature-button', () => {
        if (value != '') onAddFeature(value); 
        value = '';
    })
}));

// delete features
document.getElementById('mainFeatures').addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {return;}
    let feature = event.target.id.split('-')[1];
    onRemoveFeature(feature);
});

onUpdateField('equipments', (() => {
    generalData = {
        ...generalData,
        equipmentIds: getSelectedCheckbox('equipments'),
    };
}));

onAddFile('add-image', value => {
    onAddImage(value);
});

// navigate to next site if upload OK
const onNavigate = (isValid) => {
    if (isValid){
        history.push(routes.uploadProperty);
    }else {
        alert("Algo ha ido mal!")
    }
};

onSubmitForm("save-button", () => { 
    generalData = {
        ...generalData,
        mainFeatures: getAllChildsId('mainFeatures'),
        images: getAllImages('images'),
    }

    let generalDataValidationObject = mapPropertyDataFromVmToApi(generalData);

    // from login validations check if inputs are valid
    formValidation.validateForm(generalDataValidationObject).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            if (confirm('Seguro que desea subir esta propiedad?')) {
                alert('Propiedad subida correctamente!');
                uploadProperty(generalData).then(isValid => {
                    onNavigate(isValid); // true / false // check if post OK 
                }); 
            }else{
                alert('Rellene por favor los campos requeridos') // NO OK
            }
        };
    });
});