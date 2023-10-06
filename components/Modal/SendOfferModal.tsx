import { setModalOpen } from '@/app/redux/modalSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function SendOfferModal({props}: {props: any}) {
    const dispatch = useDispatch()

  return (
    <div className="mt-8  w-full h-full  ">
        <p>
          
          Hello {props.productId}
          <button onClick={() => dispatch(setModalOpen({title: "Second Modal", body: <p>Second Modal</p>}))}>
            Click for second one
          </button>
          </p>
    </div>
  )
}

export default SendOfferModal