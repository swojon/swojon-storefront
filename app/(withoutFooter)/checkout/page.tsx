"use client"

import type React from "react"

import { useEffect, useState } from "react"
import * as yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, Product, removeFromCart } from "@/app/redux/cartSlice"
import img from "@/public/pd.png";
import UpdateQuantity from "@/components/SelectOptions/UpdateQuantity"
import { useCreateOrderMutation } from "@/apollograph/generated"
import toast from "react-hot-toast"
import { setModalOpen } from "@/app/redux/modalSlice"
import { SearchableDropdown } from "@/components/Cart/SearchableDropdown"
import rawDistrictData from "@/data/bd-districts.json";
import policeStationData from "@/data/bd-upazilas.json"
// Calculate order summary values
const calculateOrderSummary = (cartItems:any, shippingCharge: number) => {
    // const subtotalWithoutDiscount = cartItems.reduce((total: any, item: Product) =>
    //                               total + (item.variants?.find((variant: any) => variant.id === item.variantId)?.price! ) * (item.itemCount || 1),
    //                               // (item.discountPrice || item.price) * (item.quantity || 1),
    //                             0
    //                           ) 
  const subtotal = cartItems.reduce((total: any, item: Product) =>
                                  total + (item.variants?.find((variant: any) => variant.id === item.variantId)?.salePrice! ) * (item.itemCount || 1),
                                  // (item.discountPrice || item.price) * (item.quantity || 1),
                                0
                              )
const discount =  0// 10% discount
const total = subtotal + shippingCharge

  return {
    subtotal: subtotal.toFixed(2),
    discount: discount.toFixed(2),
    shipping: shippingCharge.toFixed(2),
    total: total.toFixed(2),
  }
}

// Define the validation schema using Yup
const shippingSchema = yup.object({
  name: yup.string().required("Name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s]+$/, "Invalid phone number format"),
  address: yup.string().required("Address is required"),
  district: yup.string().required("District is required"),
  policeStation: yup.string().required("Police station is required"),
  couponCode: yup.string().notRequired(),
  shipping: yup.number().default(110)
})

export default function CheckoutPage() {

  const [promoCode, setPromoCode] = useState("")
  const [isApplying, setIsApplying] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "paynow">("cod");
  const [createOrder, {data, loading, error}] = useCreateOrderMutation();
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState<any>({})

  const districtData = rawDistrictData.districts;

  const initialValues = {
    name: "",
    phoneNumber: "",
    address : "",
    district : "",
    policeStation : "",
    couponCode: "",
    shipping: 110
   }
  // Initialize form with react-hook-form and yup validation
 
   const {
     values,
     errors,
     touched,
     handleBlur,
     isSubmitting,
     handleChange,
     handleSubmit,
     setFieldValue,
     handleReset
   } = useFormik({
     initialValues,
     validationSchema: shippingSchema,
     onSubmit:  async (values, action) => {
        console.log("submitting values", values)
        const cartItem = cartItems.map((cI:any) => ({variantId: cI.variantId, quantity: cI.itemCount, price: cI.price}))
        let payload = {...values, items: cartItem};
        createOrder({
          variables: {
            orderData: payload
          },
          onCompleted: () => {
            setFormSubmitting(false);
            toast.success("Product updated successfully");
            action.resetForm();
            dispatch(clearCart());
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "order-create-success",
              })
            );
  
          },
          onError: () => {
            setFormSubmitting(false);
            toast.error("Failed to update listing");
          },
        })
      }});

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    setIsApplying(true)
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false)
      setPromoCode("")
      // Here you would handle the actual promo code application
    }, 1000)
  }

  useEffect(() => {
      if (["dhaka", "chattogram"].includes(selectedDistrict?.name?.toLowerCase())){
        setFieldValue("shipping", 70)
      }else {
        setFieldValue("shipping", 110)
      }
  }, [selectedDistrict])
  

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.productCart.items);
    const orderSummary = calculateOrderSummary(cartItems, values.shipping)
  const handleRemove = ({id, variantId}: {id: number, variantId: number}) => {
    dispatch(removeFromCart({itemId: id, variantId: variantId}));
  };

  console.log("errors", errors)


  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Cart Items (on desktop) */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-6">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Cart Items</h2>

              <div className="space-y-4">
                {cartItems.map((item: any) => {
                     const selectedVariant = item.variants?.find(
                  (variant: any) => variant.id === item.variantId
                );
                    return (
                  <div key={item.id} className="flex items-center py-4 border-b border-gray-100 last:border-b-0">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={selectedVariant?.media?.length > 0 ? selectedVariant.media[0].url : img}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.title}</h3>
                        <p className="ml-4">
                        <span className="text-activeColor">৳{selectedVariant.salePrice * item.itemCount}</span>
                      </p>
                     

                      </div>
                      <div className="flex items-end justify-between text-sm">
                         <div className="flex gap-4">
                            <UpdateQuantity
                                item={item}
                                variantId={item.variantId}
                                padding="p-1"
                                fontSize="text-sm"
                            />
                            </div>
                        <div className="flex">
                          <button 
                          onClick={() => handleRemove({id: item.id, variantId: item.variantId})}
                          type="button" className="font-medium text-gray-600 hover:text-gray-800">
                            Remove
                          </button>
                        </div>
                        
                      </div>
                       <p className="text-xs text-gray-500 mt-1">৳{selectedVariant.salePrice} {selectedVariant.price != selectedVariant.salePrice &&  <span className=" text-gray-700  line-through">
                  ৳{selectedVariant.price}
                </span>} each</p>
                      <div>
                        
                        </div>
                    </div>
                  </div>
                )
                })}
              </div>
            </div>
          </div>

          {/* Order Summary - Visible on both mobile and desktop */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-6">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">৳{orderSummary.subtotal}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600 font-medium">-৳{orderSummary.discount}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">৳{orderSummary.shipping}</span>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-medium">Grand Total</span>
                    <span className="text-gray-900 font-bold">৳{orderSummary.total}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <form onSubmit={handleApplyPromo} className="flex flex-col space-y-3">
                  <label htmlFor="coupon" className="text-sm font-medium text-gray-700">
                    Coupon Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      id="coupon"
                      value={values.couponCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        setFieldValue("couponCode", e.target.value);
                      }}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <button
                      type="submit"
                      disabled={isApplying}
                      className={`px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors ${
                        !promoCode || isApplying ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isApplying ? "Applying..." : "Apply"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Shipping and Payment (on desktop) */}
        <div className="w-full lg:w-1/2">
          {/* Shipping Information Form */}
          <div className="bg-white rounded-lg  shadow-sm border border-gray-100 mb-6">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
              
                    className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                      touched.name && errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.name && errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                     touched.phoneNumber && errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.phoneNumber && errors.phoneNumber && <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={2}
                    className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                      touched.address && errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.address && errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-visible">
                  <div className="overflow-visible">
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                      District
                    </label>
                    <input type="hidden" value={values.district} onChange={handleChange} onBlur={handleBlur} />
                    <SearchableDropdown
                      options={districtData}
                      placeholder="Select District"
                      value={values.district}
                      onChange={(option:any) => {
                        setFieldValue("district", option.name );
                        setSelectedDistrict(option)
                      }}
                      error={errors.district}
                      touched={touched.district}
                    />
                  </div>

                  <div className="overflow-visible">
                   
                   <div>
                  <label htmlFor="policeStation" className="block text-sm font-medium text-gray-700 mb-1">
                    Police Station
                  </label>
                  <input
                    id="policeStation"
                    type="tel"
                    name="policeStation"
                    value={values.policeStation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                     touched.policeStation && errors.policeStation ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.policeStation && errors.policeStation && <p className="mt-1 text-xs text-red-600">{errors.policeStation}</p>}
                </div>
              
                </div>
                </div>
              </form>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-6">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>

              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="h-4 w-4 text-gray-900 focus:ring-gray-500"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Cash on Delivery</p>
                    <p className="text-sm text-gray-500">Pay when your order arrives</p>
                  </div>
                </label>

                {/* <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "paynow"}
                    onChange={() => setPaymentMethod("paynow")}
                    className="h-4 w-4 text-gray-900 focus:ring-gray-500"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Pay Now</p>
                    <p className="text-sm text-gray-500">Pay securely online</p>
                  </div>
                </label> */}
              </div>
            </div>
          </div>

          {/* Complete Order Button */}
          <button
            // type="submit"
            disabled={formSubmitting}
            onClick={() => handleSubmit()}
            className="w-full py-3 px-4 bg-activeColor hover:bg-primary text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formSubmitting ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  )
}
