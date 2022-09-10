import { Validators, createFormValidation } from "@lemoncode/fonk";

// changing the error messages language
const validationSchema = {
    field: {
        title: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            },
        ], 
        phone: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                message: 'Campo requerido',
            },
        ], 
        price: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        saleTypes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        address: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        city: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        province: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        squareMeter: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        rooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        bathrooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        locationUrl: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
        mainFeatures: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
/*         equipmentIds: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],  */
        images: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 

    },
};

export const formValidation = createFormValidation(validationSchema);