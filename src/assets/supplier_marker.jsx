import L from "leaflet";

export default L.divIcon({
    html: `
  <svg
    width="24"
    height="40"
    viewBox="0 0 100 100"
    version="1.1"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0 L50 100 L100 0 Z" fill="#0CDACF"></path>
  </svg>`,
    className: "",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
});