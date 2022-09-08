import { getPropertyList } from './property-list.api'
import { addPropertyRows } from './property-list.helpers'
import { mapPropertyListFromApiToVm } from './property-list.mappers'

getPropertyList().then(apiPropertyList => {
    const viewModelPropertyList = mapPropertyListFromApiToVm(apiPropertyList);
    addPropertyRows(viewModelPropertyList);
});


// SEGUIR en 1:22:00


// Mostrar los datos de las viviendas
// Para mostrarlos solo necesitamos una imagen
// titulo de la casa
// habiutaciones
// metros cuadrads
// notas.. (acortarlo tambien)
// precio viviendas en euros