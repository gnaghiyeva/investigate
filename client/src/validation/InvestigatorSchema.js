import * as yup from 'yup'

export const investigationSchema = yup.object().shape({
    ImageURL:yup.string().required('image is require'),
    title:yup.string().required('title is require'),
    desc:yup.string().required('desc is require'),
    price:yup.number().required('price is require'),
})