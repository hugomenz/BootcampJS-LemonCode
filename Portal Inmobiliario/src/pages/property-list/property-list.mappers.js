/*
* Property = {
*  id: string,             // para recuperar datos de los detalles de lapropiedad seleccionada por el usuario
*  title: string,          //
*  rooms: string,          // mapper --> 3 habitaciones
*  squareMeter: string,    // mapper --> 150 m²
*  notes: string,          // mapper --> truncar 240 characters y añadimos 3 puntos
*  price: string,          // mapper --> 120.000E
*  imagen: string          // mapper --> 1a imagen base64
* }
*/
export const mapPropertyListFromApiToVm = propertyList => {
    return propertyList.map(property => mapPropertyFromApiToVm(property));
};

const mapPropertyFromApiToVm = property => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.room} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m²`,
        notes: `${property.notes.substring(0, 240)}...`,
        price: `${property.price.toLocaleString()}€`,
        image: Array.isArray(property.images) ? property.images[0] : '',
    };
};

const getRoomWord = rooms => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
};