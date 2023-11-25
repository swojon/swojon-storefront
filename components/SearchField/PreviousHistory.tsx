import { GetSearchHistoryDocument, useGetSearchHistoryQuery, useRemoveSearchHistoryMutation } from '@/apollograph/generated'
import React from 'react'
import { useSelector } from 'react-redux'

function PreviousHistory({handleClick}: {handleClick: any}) {
    const {user} = useSelector((state:any) => state.auth)
    const {data, loading, error} = useGetSearchHistoryQuery({
      skip: !user
    })
    const [removeSearchHistory, {data:removeData, loading:removeLoading, error:removeError}] = useRemoveSearchHistoryMutation()
    const recentSearches = data?.getSearchHistory.items

    return (
    <> 
    {recentSearches && recentSearches.length > 0 && <>
      <div className="flex justify-between items-center">
          <h6 className="text-secondColor font-lexed text-sm font-medium ">
          Previous History
          </h6>
          <button
          className="text-activeColor font-lexed text-xs italic "
          onClick={() => {
            removeSearchHistory({
             refetchQueries: [GetSearchHistoryDocument]
            })
          }}
          >
          clear history
          </button>
      </div>

      <div className="flex items-center gap-2 py-3.5">
          {recentSearches?.map((rs => 
            <span onClick={() => handleClick(rs.searchQuery) } key={rs.searchQuery} className=" bg-gray-100 text-primaryColor text-sm py-2 px-3  rounded-2xl">
              {rs.searchQuery}
              </span>))}
          
      </div> 
      </> 
    } 
    </>
  )
}

export default PreviousHistory