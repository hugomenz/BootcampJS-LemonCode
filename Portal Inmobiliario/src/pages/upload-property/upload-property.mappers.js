export const mapPropertyDataFromVmToApi = property => {

    return {
        title: property.title,
        notes: property.notes,
        email: property.email,
        phone: property.phone,
        price: property.price,
        saleTypes: property.saleTypeIds,
        address: property.address,
        city: property.city,
        province: property.provinceId,
        squareMeter: property.squareMeter,
        rooms: property.rooms,
        bathrooms: property.bathrooms,
        locationUrl: property.locationUrl,
        mainFeatures: property.mainFeatures, // array
        equipments: property.equipmentIds, // checkbox
        images: property.images, // se puede subir sin fotos
    }
};