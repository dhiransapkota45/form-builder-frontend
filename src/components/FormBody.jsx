import React from 'react'
import { useSelector } from 'react-redux'
import FormItem from './FormItem'


const FormBody = () => {
    const {data, loading} = useSelector((store) => store.homepageDetails)
    
    if (loading) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <div className=' flex flex-wrap'>
            {
                 data.map((formdetail, index) => {
                    return (

                        <FormItem {...formdetail} />

                    )
                })
            }
        </div>
    )
}

export default FormBody