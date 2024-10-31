import React from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import MegamenuCategoryLoader from '../Loader/MegamenuCategoryLoader'
import MegamenuHeadingLoader from '../Loader/MegamenuHeadingLoader'
import { useListCategoriesQuery } from '@/apollograph/generated'
import dynamic from 'next/dynamic'

const DynamicMegaMenuPanel = dynamic(() => import('./MegaMenuPanel'), {ssr: false})

export default function MegaMenuCategories({}) {

    const { data, loading, error } = useListCategoriesQuery({
        variables: {
          limit: 1030,
        },
        fetchPolicy: "cache-and-network",
      });
      

  return (
       <div className="  py-3 w-full bg-white h-[100%] ">
                  {/* {error && <p> error </p>} */}

                  <div className="custom-container relative flex  gap-4 h-full">
                    {/* First Panel Start Here */}
                      {loading && (
                        <>
                        
                     
                     <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[20%] pe-3  sticky meg-menu-items">
                        <MegamenuHeadingLoader />
                      </div>
                  
                       <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[80%] pe-3  sticky meg-menu-items ">
                      <h6 className="text-lg text-primaryColor font-lexed flex  items-center">
                        <BsFillGrid3X3GapFill className="me-2" /> Shop by
                        category
                      </h6>

                      {loading && <MegamenuCategoryLoader />}

                      </div>
                      </>
                      )}

                      {data?.listCategories.items && 
                      <DynamicMegaMenuPanel categories={data?.listCategories.items}/>
                      }
                    </div>               
                  </div>      
  )
}

