import { useCheckOrderRatioQuery } from '@/apollograph/generated'
import React, { useEffect } from 'react'
import NotMatched from '../NotMatched/NotMatched'
import dynamic from 'next/dynamic'
import CourierCard from './CourierCard';

const DynamicDeliveryPieChart = dynamic(() => import('./DeliveryPieChart'), {ssr: false});

function DeliveryResults({setLoading, phone}: {
    setLoading: any,
    phone: string
}) {
    const {data, loading, error} = useCheckOrderRatioQuery({
        variables: {
            orderRatioQuery: {
                phone: phone
            }
        },
        skip: !phone
      })

      useEffect(()=> {
        setLoading(loading)
      }, [loading])
  return (
      <div className="mb-8">
       <h2 className="text-xl mb-4">
            Courier Statistics For: <span className='font-semibold'>{phone}</span>
        </h2>
    {loading ? <NotMatched title='Getting everything lined up' imagePath='/stickers/Looking.svg'/> :
        <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
      
        <div className="p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            {data?.checkOrderRatio.total_parcel! > 0  ?
            <DynamicDeliveryPieChart data={{
                successful: data?.checkOrderRatio.success_parcel ?? 0,
                cancelled: data?.checkOrderRatio.cancelled_parcel ?? 0,
            }} /> : 
                <NotMatched title="We didn't find any record" imagePath='/stickers/SorryNoResult.svg'/>
            }
          </div>
          <div className="w-full md:w-1/2">
            <CourierCard data={{ name: "Summary",
                 success_parcel: data?.checkOrderRatio.success_parcel,
                 cancelled_parcel: data?.checkOrderRatio.cancelled_parcel ,
                 total_parcel: data?.checkOrderRatio.total_parcel ,
                 success_ratio: data?.checkOrderRatio.success_ratio
                 }} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourierCard key="Pathao" data={ {name: "pathao", ...data?.checkOrderRatio.pathao}} />
          <CourierCard key="redX" data={ {name: "RedX", ...data?.checkOrderRatio.redx}} />
          <CourierCard key="SteadFast" data={ {name: "SteadFast", ...data?.checkOrderRatio.steadfast}} />
          <CourierCard key="Paperfly" data={ {name: "PaperFly", ...data?.checkOrderRatio.paperfly}} />

      
      </div>
    </div>
    }
    </div>
  )
}

export default DeliveryResults