import { Validators, createFormValidation } from "@lemoncode/fonk";

// changing the error messages language
const validationSchema = {
    field: {
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
        message: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ], 
    },
};

export const formValidation = createFormValidation(validationSchema);