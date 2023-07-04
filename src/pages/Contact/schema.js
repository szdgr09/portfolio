import * as yup from 'yup';


const obj = yup.object()

const schema = obj.shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    name: yup.string().required('Name is required'),
    message: yup.string().required('Message required').min(10, 'Message be atleast 10 characters')
});

export { schema }