import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { useSearchLocationQuery } from "@/apollograph/generated";
import SearchLoader from "./SearchLoader";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from 'leaflet/dist/images/marker-icon.png'

interface NominatimLocation {
  lat?: string | null;
  lon?: string | null;
  placeId?: string | null;
  locality?: string | null;
  displayName?: string | null;
  city?: string | null;
  stateDistrict?: string | null;
  state?: string | null;
  country?: string | null;
  postCode?: string | null;
}

const MeetUp = ({
  setFieldValue,
  values,
  errors,
  handleBlur,
  touched,
}: {
  handleBlur: any;
  touched: any;
  setFieldValue: any;
  values: any;
  errors: any;
}) => {
  const ref = useRef<any>(null);
  const [searchValue, setSearchValue] = useState<any>(null);
  const handleClick = () => {
    ref.current.focus();
  };
  const { data, loading, error } = useSearchLocationQuery({
    variables: {
      nominatimQuery: {
        query: `${searchValue}, BD`,
      },
    },
    skip: !searchValue,
  });
  const locationSearchResults = data?.searchLocation.items;
  console.log(locationSearchResults);
  const [checkedLocation, setCheckedLocation] = useState<any>([]);

  const handleChecked = (e: any, loc: any) => {
    var { __typename, ...location } = loc;
    if (e.target.checked)
      setFieldValue("meetupLocations", [...values.meetupLocations, location]);
    else
      setFieldValue(
        "meetupLocations",
        values.meetupLocations.filter((cL: any) => cL.placeId != loc.placeId)
      );
  };
  console.log("Meetup Locations", values.meetupLocations);
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const sendData = () => {
      // If the user keeps on typing then the timeout is cleared and restarted
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setSearchValue(ref.current.value);
        setShowSearchResult(true);
      }, 2000);
    };

    const element = ref.current;
    // Set listener and start timeout
    element.addEventListener("keyup", sendData);

    return () => {
      // Remove listener wwhen unmounting
      element.removeEventListener("keyup", sendData);
    };
  }, []);
  const handleCancelClick = () => {
    setShowSearchResult(false);
    setSearchValue(null);
  };

  const handleRemoveClick = (loc: any) => {
    setFieldValue(
      "meetupLocations",
      values.meetupLocations.filter((cL: any) => cL.placeId != loc.placeId)
    );
  };
  return (
    <div className="md:px-6 px-3 py-4 space-y-5 ">
      <div className="relative w-full ">
        <div className="relative w-full ">
          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            ref={ref}
            // onChange={handleSearchChange}
            className={`block w-full   bg-[#F5F5F5] py-4 pr-3 pl-9 leading-5 placeholder-[#C0C0C0]  focus:placeholder-gray-400 focus:outline-none  sm:text-sm ${
              searchValue
                ? "rounded-t-3xl"
                : "rounded-3xl focus:border-activeColor focus:ring-1 focus:ring-activeColor"
            }`}
            placeholder="Please insert a location, Search results will show up once you stop typing"
            type="search"
          />
        </div>

        {loading && <SearchLoader />}

        {showSearchResult && locationSearchResults && (
          <>
            <div className="w-full   bg-white shadow-md">
              {locationSearchResults.map((loc) => (
                <div
                  key={loc.placeId}
                  className="flex items-center space-x-4 border-b border-gray-100 md:px-5 px-2 py-4"
                >
                  <input
                    id={`osmLocation${loc.placeId}`}
                    name="osmLocation"
                    type="checkbox"
                    onChange={(e) => handleChecked(e, loc)}
                    // value={loc}
                    className="md:h-4 h-4 md:w-4 w-4 rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
                  />

                  <label
                    htmlFor="comments"
                    className="text-secondColor lg:text-base text-sm font-medium w-[85%] md:w-[90%]"
                  >
                    {loc.displayName}
                  </label>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-end items-center gap-5">
              <button
                onClick={handleCancelClick}
                className="px-8 md:py-3.5 py-2 text-white bg-secondColor text-base rounded-md"
              >
                Cancel
              </button>
              {/* <button  className="px-8 py-3.5 text-white bg-activeColor text-base rounded-md">
                Done
              </button> */}
            </div>
          </>
        )}
      </div>

      <div className="space-y-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4  ">
          {values.meetupLocations.map((ml: any, idx: number) => (
            <div
              key={ml.placeId}
              className="md:p-4 p-2 border border-[#F1F1F1] rounded-md space-y-4"
            >
              <div className="flex items-start justify-between">
                <span className="text-base text-primaryColor font-bold">
                  {ml.displayName}
                </span>
                <span>
                  <MdOutlineClose
                    onClick={() => handleRemoveClick(ml)}
                    className="text-2xl text-primaryColor"
                  />
                </span>
              </div>

              <div className="h-[204px] rounded-md w-full">
                <MapContainer
                  style={{ height: 204, borderRadius: 6 }}
                  center={[ml.lat, ml.lon]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[ml.lat, ml.lon]}>
                    <Popup>
                      {ml.displayName}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          ))}

          <div
            onClick={handleClick}
            className="border-dashed border-2 border-activeColor h-full w-full rounded-2xl flex items-center justify-center cursor-pointer p-4 min-h-[210px]"
          >
            <div className="md:space-y-4 space-y-2 text-center flex flex-col items-center">
              <GrLocation className="text-activeColor text-3xl" />
              <span className="text-primaryColor font-lexed text-base font-medium">
                Add New Location
              </span>
              {touched?.meetupLocations && errors?.meetupLocations ? (
                <p className="text-secondColor text-base font-medium">
                  {errors.meetupLocations}
                </p>
              ) : (
                <p className="text-secondColor text-base font-medium">
                  You can add upto 5 locations
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-b border-[#F1F1F1]"></div>

        <div className="space-y-4">
          <span className="text-base font-bold font-lexed  text-[#FA4119]">
            Reminders
          </span>

          <div className="flex items-center md:gap-0 gap-4">
            <div className=" lg:w-[5%] md:w-[7%] w-[10%]">
              <IoWarningOutline className="leading-0 text-3xl text-primaryColor " />
            </div>

            <span className="block font-medium text-primaryColor md:text-base text-sm lg:w-[95%] md:w-[93%] w-[90%]">
              Resolve conflict before you make the deal, swojon is not
              responsible for any unwanted situation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUp;
