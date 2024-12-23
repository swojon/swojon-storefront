"use client";
import { useFormik } from 'formik';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { BiLoaderCircle } from 'react-icons/bi';
import * as Yup from "yup";
import Image from 'next/image';
import DeliveryResults from './DeliveryResults';

const bangladeshiPhoneValidation = Yup.string()
.transform(value => value.replace(/[\s-]/g, ''))
  .test(
    'is-valid-bd-phone',
    'Invalid Bangladeshi phone number',
    value => {
      if (!value) return false; // Ensure value exists
      const withoutCountryCode = /^[0-9]{11}$/;
      const withCountryCode = /^\+880[0-9]{9}$/;
      return withoutCountryCode.test(value) || withCountryCode.test(value);
    }
  );

// Example Schema
const formSchema = Yup.object({
    phone: bangladeshiPhoneValidation.required('Phone number is required'),
})

function FrontPage() {
  const searchParams = useSearchParams()
  const [phone, setPhone] = useState(searchParams.get("phone") ?? "");
  const initialValues = {
    phone: phone
  };
  const [loading, setLoading] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    validateOnBlur: false,
    onSubmit: async (values, action) => {
        setPhone(values.phone)
      } 
  });

  const handlePhoneChange = (e:any) => {
    const sanitizedValue = e.target.value.replace(/[\s-]/g, '');
    setFieldValue('phone', sanitizedValue); // Update value in the field
  }

  return (
    <>
    {!phone ?   
    <section className="flex flex-col justify-center items-center custom-container page-height">
    <div className="container mx-auto p-4 ">
        <div className="p-4 bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto mb-8">
        <div className='p-2'>
            <Image
        src={'stickers/Greetings.svg'}
        className="w-full h-[200px]"
        width={700}
        height={900}
        alt="not-found"
      /></div>
            <div className="">
            <h1 className="text-center text-2xl font-bold ">Courier History Shield</h1>
            </div>
            <div className="pt-1">
            <p className="text-gray-600 mb-4 text-center">Enter Phone Number to Check Courier History</p>
            <div  className="space-y-4">
                <input
                type="text"
                placeholder="Enter phone number"
                value={values.phone}
                onChange={(e) => handlePhoneChange(e)}
                name="phone"
                onBlur={handleBlur}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-activeColor focus:border-transparent"
                />
                {touched.phone && errors.phone && <p className='text-sm text-red-500'>{errors.phone}</p>}
            
                  
                  <button
                type="submit"
                onClick={() => handleSubmit()}
                className="flex justify-center w-full bg-activeColor text-white font-semibold py-2 px-4 rounded-md hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 transition duration-200"
                >
                {loading ? <BiLoaderCircle className='text-base animate-spin' />   : 
                "Check Records"
                }
                </button>
            
                  </div>
            </div>
        </div>
    </div>
    </section>
     :  

     <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
       
       <h1 className="text-2xl font-bold mb-4">Courier History Shield</h1>
       <div className="flex flex-col sm:flex-row gap-4">
         <input
           type="text"
           placeholder="Enter phone number"
           value={values.phone}
           onChange={(e) => handlePhoneChange(e)}
           name="phone"
           onBlur={handleBlur}
           required
           className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-activeColor"
         />
         <div>
         <button
            
            onClick={() => handleSubmit()}
            className="flex justify-center w-full sm:w-auto  bg-activeColor text-white font-semibold py-2 px-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition duration-200"
            >
              
            {loading ? <BiLoaderCircle className='text-base animate-spin' /> :"Check Records"}
            </button>
             
         </div>
              
       </div>
       {touched.phone && errors.phone && <p className='pt-1 text-sm text-red-500'>{errors.phone}</p>}
     </div>
        <div className="mb-8">
          <DeliveryResults phone={phone} setLoading={setLoading}   />
        </div>
            </div>
        }
    </> 
   
  )
}

export default FrontPage