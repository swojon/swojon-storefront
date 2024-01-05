import React from 'react'
// src/components/Map.tsx
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MapMeetup(props: any) {
  const {ml} = props

  return <MapContainer
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
}