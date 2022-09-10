export const mapPropertyDataFromVmToApi = property => {

    return {
        title: property.title,
        notes: '',
        email: '',
        phone: '',
        price: '',
        saleType: '',
        address: '',
        city: '',
        province: '',
        squareMeter: '',
        rooms: '',
        bathrooms: '',
        locationUrl: '',
        mainFeatures: '', // array
        equipment: '', // checkbox
        //images: '', // se puede subir sin fotos
    }
};