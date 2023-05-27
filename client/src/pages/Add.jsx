import React from 'react'
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import { investigationSchema } from '../validation/InvestigatorSchema';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { postInvestigator } from '../api/requests';



const Add = () => {
  const navigate = useNavigate()
  const handleSubmit = async(values,actions)=>{
    await postInvestigator(values)
    actions.resetForm()
    navigate('/')
  }
  const formik = useFormik({
    initialValues:{
        imageURL:'',
        title:'',
        desc:'',
        price:''
       },

       validationSchema: investigationSchema,
       onSubmit:handleSubmit
  })
  return (
    <>
    
    <form onSubmit={formik.handleSubmit}>
      <TextField type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} name='imageURL' value={formik.values.imageURL} id="outlined-basic" label="image" variant="outlined" />
      {formik.errors.imageURL && formik.touched.imageURL && (<span>{formik.errors.imageURL}</span>)}
      <TextField type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} name='title' value={formik.values.title} id="outlined-basic" label="title" variant="outlined" />
      {formik.errors.title && formik.touched.title && (<span>{formik.errors.title}</span>)}
      <TextField type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} name='desc' value={formik.values.desc} id="outlined-basic" label="desc" variant="outlined" />
      {formik.errors.desc && formik.touched.desc && (<span>{formik.errors.desc}</span>)}
      <TextField type='number' onChange={formik.handleChange} onBlur={formik.handleBlur} name='price' value={formik.values.price} id="outlined-basic" label="price" variant="outlined" />
      {formik.errors.price && formik.touched.price && (<span>{formik.errors.price}</span>)}
     
      <Button variant='contained' type='submit'>Add</Button>
    </form>
    </>
  )
}

export default Add