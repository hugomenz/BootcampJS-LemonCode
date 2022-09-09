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
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m²`,
        notes: `${property.notes.substring(0, 240)}...`,
        price: `${property.price.toLocaleString()}€`,
        image: Array.isArray(property.images) ? property.images[0] : '',
    };
};

export const getRoomWord = rooms => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
};

export const mapFilterToQueryParams = filter => {
    let queryParams = '';

    if (filter.saleTypeId) queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;// like por array
    if (filter.provinceId) queryParams = `${queryParams}provinceId=${filter.provinceId}&`;  //no like por ser value
    if (filter.minRooms) queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
    if (filter.minBathRooms) queryParams = `${queryParams}bathrooms_gte=${filter.minBathRooms}&`;
    if (filter.minPrice) queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
    if (filter.maxPrice) queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;

    return queryParams.slice(0, -1); // para eliminar el ultimo &
};