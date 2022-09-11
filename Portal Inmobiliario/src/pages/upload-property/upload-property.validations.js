import { Validators, createFormValidation } from "@lemoncode/fonk";
import { arrayRequired } from "@lemoncode/fonk-array-required-validator";

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
                customArgs: { pattern: /(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}/ },
                message: 'Teléfono no válido'
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
                validator: arrayRequired.validator,
                message: 'Selecciona al menos 1 elemento!',
                customArgs: { minLength: 1 },
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
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^https:\/\/www\.google\.com\/maps\/embed?/ },
                message: 'Url no válida',
            },
        ], 
        mainFeatures: [
            {
                validator: arrayRequired.validator,
                message: 'Selecciona al menos 1 elemento!',
                customArgs: { minLength: 1 },
            },
        ], 
    },
};

export const formValidation = createFormValidation(validationSchema);