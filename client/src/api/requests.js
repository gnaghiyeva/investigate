import { BASE_URL } from "./base_url";
import axios from 'axios'

//get
export const getAllInvestigators = async(title)=>{
    let URL
    let globalData

    if(!title){
        URL = BASE_URL+ '/investigators'
    }
    else{
        URL = BASE_URL + '/investigators/'+`?title=${title}`
    }

    await axios.get(URL).then((res)=>{
        globalData=res.data
    })

    return globalData
}

export const getInvestigatorById=async(id)=>{
    let globalData
    await axios.get(`${BASE_URL}/investigators/${id}`).then((res)=>{
        globalData=res.data
    })
    return globalData
}

export const deleteInvestigator = async(id)=>{
    let deletedInvestigator
  await axios.delete(`${BASE_URL}/investigators/${id}`).then((res)=>{
      deletedInvestigator=res.data
    })
    return deletedInvestigator
}

export const postInvestigator = (newInvestigator)=>{
    axios.post(`${BASE_URL}/investigators`, newInvestigator)
}

export const editInvestigator = (id,updatedInvestigator)=>{
    axios.put(`${BASE_URL}/investigators/${id}`, updatedInvestigator)
}