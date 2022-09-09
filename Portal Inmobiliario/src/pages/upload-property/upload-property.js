import { onUpdateField, onSubmitForm, onAddFile } from '../../common/helpers/element.helpers'
import { uploadProperty } from './upload-property.api'
import 
{ onAddFeature, 
    onRemoveFeature, 
    getAllChildsId, 
    setCheckboxList, 
    setOptionList,
    getSelectedCheckbox, 
    onAddImage,
    getAllImages} 
    from './upload-property.helpers'

import { getEquipmentList } from "../property-detail/property-detail.api";
import { getSaleTypeList, getProvinceList } from '../property-list/property-list.api'

Promise.all(
    [ 
        getSaleTypeList(), getProvinceList(), getEquipmentList(),
    ])
    .then(([saleTypeList, provinceList, equipmentList]) =>{
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
    saleTypeIds: '',
    address: '',
    city: '',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: '', // array
    equipmentIds: '', // checkbox
    images: '',
}

onUpdateField('title', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        title: value
    }
}));

onUpdateField('notes', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        notes: value
    }
}));

onUpdateField('email', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        email: value
    }
}));

onUpdateField('phone', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        phone: value
    }
}));

onUpdateField('price', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        price: +value
    }
}));

// typeProperty >> from onSubmitForm

onUpdateField('address', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        address: value
    }
}));

onUpdateField('city', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        city: value
    }
}));

// province >> get Province dropdown! & select prov

onUpdateField('squareMeter', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        squareMeter: +value
    }
}));

onUpdateField('rooms', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        rooms: +value
    }
}));

onUpdateField('bathrooms', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        bathrooms: +value
    }
}));

onUpdateField('locationUrl', (event => {
    let value = event.target.value

    generalData = {
        ...generalData,
        locationUrl: value
    }
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

onAddFile('add-image', value => {
    onAddImage(value);
});

// TODO //////////////////////////////////////////////
// typeDetailids                                    //
// province >> get Province dropdown! & select prov //
//                                                  //
// ///////////////////////////////////////////////////


onSubmitForm('save-button', () => {

    generalData = {
        ...generalData,
        saleTypes: getSelectedCheckbox('saleTypes'),
        mainFeatures : getAllChildsId('mainFeatures'),
        equipmentIds: getSelectedCheckbox('equipments'),
        images: getAllImages('images'),
    }
    console.log(generalData);

    uploadProperty(generalData);
});


