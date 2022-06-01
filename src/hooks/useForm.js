import { useState } from "react"



export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm)
    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const resetForm = () => {
        setForm(initialForm)
    }
    return { form, handleInput,resetForm, }
}   
