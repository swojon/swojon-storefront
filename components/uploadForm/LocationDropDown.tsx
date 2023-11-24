import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { useListLocationsQuery } from "@/apollograph/generated";
import { getLocationTree } from "@/lib/helpers/nestify";
import { MdLocationPin } from "react-icons/md";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const LocationDropDown = ({
  values,
  setFieldValue,
}: {
  values: any;
  setFieldValue: any;
}) => {
  const { data, loading, error } = useListLocationsQuery();
  const locations = data?.listLocations.items;
  // const parentCategories = categories?.filter(
  //   (item) => item.parentLocation == null
  // );
  const locationTree = locations ? getLocationTree(locations, null) : [];

  const [selected, setSelected] = useState(
    locations?.find((idx) => idx.id === values) ?? null
  );

  const [clickLocation, setClickLocation] = useState<any>(null);
  const [clickSubLocation, setClickSubLocation] = useState<any>(null);

  const handleSelectLocation = (location: any) => {
    // console.log("cat", location);
    setClickLocation(clickLocation?.id === location.id ? null : location);
  };

  const handleSelectSubLocation = (location: any) => {
    // console.log("cat", location);
    setClickSubLocation(clickSubLocation?.id === location.id ? null : location);
  };

  // console.log(selected);

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        setFieldValue("locationId", value!.id);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative ">
            <Listbox.Button className="relative w-full  rounded-md border border-gray-300 bg-white py-2 px-2 text-left shadow-sm flex items-center focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm cursor-pointer">
              <div className="flex items-center  w-[80%]">
                
               <MdLocationPin className="text-activeColor text-lg me-3" />
                
                {selected ?
                <>
                  <span className=" truncate  ">{selected?.name}</span>{" "}
                  <span className="px-2 text-secondColor text-xs">in</span>
                  <span className="text-secondColor text-xs">
                    {selected?.parentLocation?.name}
                  </span>  
                </> :
                  <span className="text-secondColor">Select a Location</span>
                }
              </div>

              <div className="pointer-events-none w-[20%] flex items-center justify-end">
                <FaAngleDown />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <div className="flex flex-col justify-center">
                  {locationTree?.map((item) => (
                    <>                    
                    <div
                      key={item.id}
                      className="p-2 border flex justify-between"
                      onClick={() => handleSelectLocation(item)}
                    >
                      {item.name}

                      <div className="pointer-events-none w-[20%] flex items-center justify-end">
                        {clickLocation?.id === item.id ?  <FaAngleUp /> : <FaAngleDown/>}
                      </div>
                    </div>
                      
                    {!!clickLocation && item.id === clickLocation?.id &&
                        item.children.map((sublocation:any) => (
                          <>       
                          {sublocation.children.length > 0 ?   
                            <>            
                              <div
                                key={sublocation.id}
                                className="px-4 py-2 border  flex justify-between"
                                onClick={() => handleSelectSubLocation(sublocation)}
                              >
                                {sublocation.name}
          
                                <div className="pointer-events-none w-[20%] flex items-center justify-end">
                                  {clickSubLocation?.id === sublocation.id ?  <FaAngleUp /> : <FaAngleDown/>}
                                </div>
                              </div>
                                {!!clickSubLocation && sublocation.id === clickSubLocation.id &&
                                sublocation.children.map((grandSubLocation:any) => (
                                  <Listbox.Option
                                  key={grandSubLocation.id}
                                  className="ms-4 text-base sm:text-sm py-2 px-4 text-secondColor "
                                  value={grandSubLocation}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {grandSubLocation.name}
                                      </span>
                                    </>
                                  )}
                                </Listbox.Option>
                                ))}
                              
                              </> : <div className="border">
                              <Listbox.Option
                                  key={sublocation.id}
                                  className="ms-4 text-base py-1 text-secondColor sm:text-sm"
                                  value={sublocation}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {sublocation.name}
                                      </span>
                                    </>
                                  )}
                                </Listbox.Option></div>}
                          </>
                          ))}
                          </>
                  ))}
                </div>

           
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default LocationDropDown;
