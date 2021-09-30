import { useState } from "react"

export const HanddleFormState = () =>{
    const [form,setForm] = useState({})

   const onChange = (e) =>{
    form[e.target.name] = e.target.value
    setForm({...form})
   }

    return {form,onChange}
}