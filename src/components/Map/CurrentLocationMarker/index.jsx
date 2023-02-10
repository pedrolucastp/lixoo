import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import collector from "../../../assets/collector_marker";

export default function CurrentLocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={collector}>
      <Popup>
        You are here. <br />
      </Popup>
    </Marker>
  );
}
