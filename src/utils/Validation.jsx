import * as Yup from 'yup';


export const RegistrationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8, "8+ characters").required('Password is required'),
    checkbox: Yup.boolean(),
});

// const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const PersonalInfoSchema = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    gender: Yup.string().required('Gender required'),
    countryCode: Yup.string().required(),
    phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    // .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
    birthday: Yup.string()
    .required('Let us know about your birthday so as not to miss a gift'),
});

export const SearchSchema = Yup.object().shape({
    searchQuery: Yup.string()
    .min(2, 'Search query must be at least 2 characters')
    .required('Search query is required'),
});

export const AddressSchema = Yup.object().shape({
    street: Yup.string().required('Street is required'),
    apartment: Yup.string().required(),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().matches(/^[0-9]{5}$/, 'ZIP code must be exactly 5 digits').required('ZIP code is required'),
});
