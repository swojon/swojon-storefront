interface CourierCardProps {
    data: {
      name?: string
      cancelled_parcel?: any
      success_parcel?: any
      success_ratio?: any
      total_parcel?: any
    }
  }
  
  export default function CourierCard({ data }: CourierCardProps) {
    const total = data.success_parcel + data.cancelled_parcel
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {data.name && <div className=" px-6">
          <h3 className="text-xl font-semibold">{data.name}</h3>
        </div>
        }
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-activeColor">{data.success_parcel}</p>
              <p className="text-base text-activeColor">Successful</p>
              <p className="text-sm text-activeColor mt-2">{data.success_parcel == 0 ? 0 : ((data.success_parcel / total) * 100).toFixed(1)}%</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">{data.cancelled_parcel}</p>
              <p className="text-base text-yellow-800">Cancelled</p>
              <p className="text-sm text-yellow-600 mt-2">{data.success_parcel == 0 ? 0 :((data.cancelled_parcel / total) * 100).toFixed(1)}%</p>
            </div>
        </div>
        </div>
      </div>
    )
  }
  
  