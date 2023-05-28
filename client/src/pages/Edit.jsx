import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from "formik";
import { investigationSchema } from '../validation/InvestigatorSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { editInvestigator, getInvestigatorById } from '../api/requests';
import { useInvestigationContext } from '../context/InvestigationContext';


const Edit = () => {
  const [investigators,setInvestigators] = useInvestigationContext();
  console.log("context",investigators)
  const {id} = useParams()
  const navigate = useNavigate()
  const [investigator, setInvestigator]=useState({})

    useEffect(()=>{
    getInvestigatorById(id).then((res)=>{
      setInvestigator(res)
    
      formik.values.imageURL = res.data.imageURL;
      // console.log('image',res.data.imageURL)
      formik.values.title = res.data.title;
      formik.values.desc = res.data.desc;
      formik.values.price = res.data.price;

    })
  },[id])

  const handleEdit = async(values,actions)=>{
        setInvestigators(values)
        await editInvestigator(id,values)
        navigate('/')
        actions.resetForm()
      }
    
      const formik = useFormik({
        initialValues:{
            imageURL:investigator.imageURL,
            title:investigator.title,
            desc:investigator.desc,
            price:investigator.price
           },
    
           validationSchema: investigationSchema,
           onSubmit:handleEdit
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
         
          <Button variant='contained' type='submit'>Edit</Button>
        </form>
        </>
  )
}

export default Edit
