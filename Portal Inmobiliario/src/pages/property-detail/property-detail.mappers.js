import { getRoomWord } from '../property-list/property-list.mappers'
import { getEquipmentList } from './property-detail.api'

export const mapPropertyDetailsFromApiToVm = (property, equipments) => {

    return {
        mainImage:  Array.isArray(property.images) ? property.images[0] : '', 
        title: property.title,
        city: property.city,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m²`,
        bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
        price: `${property.price.toLocaleString()}€`,
        notes: property.notes,
        mainFeatures: property.mainFeatures,
        //equipments: property.equipmentIds,
        equipments: getEquipmentNames(property,equipments),
        locationUrl: property.locationUrl,
        images:  Array.isArray(property.images) ? property.images : '', 
    };
};

const getBathroomWord = bathrooms => {
    return bathrooms > 1 ? 'baños' : 'baño';
};

const getEquipmentNames = (property, equipments) => {
    const filteredEquipmentsArray = equipments.filter(equipment => property.equipmentIds.includes(equipment.id));
    let filteredEquimentNames =  filteredEquipmentsArray.map(({ name }) => name);
    return filteredEquimentNames;
};