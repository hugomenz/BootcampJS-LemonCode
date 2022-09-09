import { getProperty, getEquipmentList } from "./property-detail.api";
import { history } from '../../core/router';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyDetailsFromApiToVm } from './property-detail.mappers'

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