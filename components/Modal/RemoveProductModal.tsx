import { useRemoveListingMutation, useSendChatMessageMutation, useUpdateListingMutation } from "@/apollograph/generated";
import { setModalClose } from "@/app/redux/modalSlice";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { LuBan, LuCheck, LuExternalLink, LuHeart, LuPackage, LuShoppingBag, LuTrash, LuUndo } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const options = [
  {
    id: 'sold_marketplace',
    icon: <LuShoppingBag className="w-5 h-5" />,
    label: "Sold on this marketplace",
    description: "Great news! Let's update your listing status 🎉",
    action: {
      type: 'mark_sold',
      icon: <LuCheck className="w-4 h-4" />,
      label: "Mark as Sold",
      buttonClass: "bg-activeColor  hover:shadow-lg "
    }
  },
  {
    id: 'sold_elsewhere',
    icon: <LuExternalLink className="w-5 h-5" />,
    label: "Sold elsewhere",
    description: "Thanks for letting us know you found a buyer!",
    action: {
      type: 'mark_sold',
      icon: <LuCheck className="w-4 h-4" />,
      label: "Mark as Sold",
      buttonClass: "bg-activeColor  hover:shadow-lg "
    }
  },
  {
    id: 'not_sold',
    icon: <LuPackage className="w-5 h-5" />,
    label: "Haven't sold yet",
    description: "Need to pause your listing? No problem!",
    action: {
      type: 'mark_unavailable',
      icon: <LuBan className="w-4 h-4" />,
      label: "Mark as Unavailable",
      buttonClass: "bg-activeColor  hover:shadow-lg "
    }
  },
  {
    id: 'changed_mind',
    icon: <LuUndo className="w-5 h-5" />,
    label: "Changed my mind",
    description: "Would you like to pause your listing for now?",
    action: {
      type: 'mark_unavailable',
      icon: <LuBan className="w-4 h-4" />,
      label: "Mark as Unavailable",
      buttonClass: "bg-activeColor  hover:shadow-lg "
    }
  },
  {
    id: 'no_reason',
    icon: <LuHeart className="w-5 h-5" />,
    label: "Rather not say",
    description: "No problem! We'll remove this listing for you",
    action: {
      type: 'delete',
      icon: <LuTrash className="w-4 h-4" />,
      label: "Delete Listing",
      buttonClass: "bg-red-500 hover:bg-red-700"
    }
  }
];

    
function RemoveProductModal({ props: { product} }: { props: {product: any} }) {
 
  const dispatch = useDispatch();
 
  const {data:session} = useSession();
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string|null>(null);
  const [removeListing, { data:deleteData, loading: deleteLoading, error:deleteError }] =
    useRemoveListingMutation();

  const [updateListing, { data:update, loading: updateLoading, error:updateError }] =
    useUpdateListingMutation(); 

  const handleSoldButton = () => {
    if (!session?.user?.id) {
      // console.log("You must be logged in to perform the action");
    } else {
      setDisabled(true);
      updateListing({
        variables: {
            listingId : product.id,
            listingData : {
              isSold : true,
              // isAvailable: false,
              isSoldHere: selectedOption === "sold_marketplace"
            }
        },
        onCompleted: () => {
          toast.success("post marked as sold");
          setDisabled(true);
          dispatch(setModalClose(true)); 
        },
        onError: () => {
          toast.error("Something went wrong");
          setDisabled(false);
        },
        update(cache, {data}){
          console.log(cache)
          const cId = cache.identify(product);
          cache.modify({
            id: cId,
            fields: {
              isSold(prev) {
                return true; 
              },
            }
          })
        }
      });
    }
    
  };
  const handleUnavailableButton = () => {
    if (!session?.user?.id) {
      // console.log("You must be logged in to perform the action");
    } else {
      setDisabled(true);
      removeListing({
        variables: {
            listingId : product.id,
            listingData : {
              isAvailable: false,
              // isSold: false,
            }
        },
        onCompleted: () => {
          toast.success("post marked as unavailable");
          setDisabled(true);
          dispatch(setModalClose(true)); 
        },
        onError: () => {
          toast.error("Something went wrong");
          setDisabled(false);
        },
        update(cache, {data}){
          console.log(cache)
          const cId = cache.identify(product);
          cache.modify({
            id: cId,
            fields: {
              isAvailable(prev) {
                return true; 
              },
            }
          })
        }
      });
    }
    
  };

  const handleDeleteButton = () => {
    if (!session?.user?.id) {
      console.log("Please login before sending the message");
    } else {
      setDisabled(true);
      removeListing({
        variables: {
            listingId : product.id,
            listingData : {
              isDeleted : true
            }
        },
        onCompleted: () => {
          toast.success("post deleted");
          setDisabled(true);
          dispatch(setModalClose(true)); 
        },
        onError: () => {
          toast.error("failed to remove product");
          setDisabled(false);
        },
        update(cache, {data}){
          console.log(cache)
          const cId = cache.identify(product);
          cache.evict({ id: cId });
          // Clean up any remaining references (garbage collection)
          cache.gc();
        }
      });
    }
    
  };

  return (
    <section className="lg:w-[38%] md:w-[45%] sm:w-[55%] w-[90%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 pb-5  relative">
        
      <div className="flex justify-between p-5 bg-[#F1F7FF] items-center rounded-t-md">
        <h5 className="font-lexed text-base lg:text-lg text-primaryColor">
        Update Your Listing Status
        </h5>
        <button
          className="rounded-full bg-activeColor p-1 border  text-white"
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>
      
      
      <div className="px-5">
          <div className="text-xl text-center mb-4">
            
          </div>
          
          <div className="text-center mb-6 text-secondColor">
          What would you like to do with this listing? Your feedback helps us improve! 💫
            
          </div>
           
        </div>
      
      <div className="space-y-3 px-5 mt-5">
          {options.map((option) => (
            <div key={option.id} className="space-y-2">
              <button
                onClick={() => setSelectedOption(option.id)}
                className={`w-full p-4 rounded-md transition-all border cursor-pointer duration-200 group flex items-center gap-4
                  ${selectedOption === option.id 
                    ? 'border border-activeColor ' 
                    : 'border-gray-200 hover:border-gray-500'
                  }`}
              >
                <div className={`text-gray-500 transition-colors`}>
                  {option.icon}
                </div>
                <div className="text-left">
                  <div className={`font-medium transition-colors`}>
                    {option.label}
                  </div>
                  <div className={`text-sm text-gray-500 transition-colors`}>
                    {option.description}
                  </div>
                </div>
              </button>
              
              {selectedOption === option.id && (
                <>
                {option.action.type === "mark_sold" && (
                  <button
                       disabled={disabled}
                       type="button"
                       onClick={handleSoldButton}
                       className={`w-full py-2 px-4 rounded-lg text-white flex items-center justify-center gap-2 transition-colors ${option.action.buttonClass}`}
                     >  {option.action.icon}
                       {updateLoading ? (
                         <BiLoaderCircle className=" text-xl animate-spin" />
                       ) : (
                         "Mark as Sold"
                       )}
                     </button>
                )}
                 {option.action.type === "mark_unavailable" && (
                    <button
                    disabled={disabled}
                    type="button"
                    onClick={handleUnavailableButton}
                    className={`w-full py-2 px-4 rounded-lg text-white flex items-center justify-center gap-2 transition-colors ${option.action.buttonClass}`}
                  >{option.action.icon}
                    {updateLoading ? (
                      <BiLoaderCircle className=" text-xl animate-spin" />
                    ) : (
                      "Mark Unavailable"
                    )}
                  </button>
                )}
                {option.action.type === "delete" && (
                    <button
                    disabled={disabled}
                    type="button"
                    onClick={handleDeleteButton}
                    className={`w-full py-2 px-4 rounded-lg text-white flex items-center justify-center gap-2 transition-colors ${option.action.buttonClass}`}
                  >
                    {option.action.icon}
                    {deleteLoading ? (
                      <BiLoaderCircle className=" text-xl animate-spin" />
                    ) : (
                      
                      "Delete"
                    )}
                  </button>
                )}
                </>
              )}
                
            </div>
          ))}
        
        </div>
        
      
    </section>
  );
}

export default RemoveProductModal;
