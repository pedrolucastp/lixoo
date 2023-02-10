import { Component } from "react";
import "./styles.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import supplier from "../../assets/supplier_marker";
import CurrentLocationMarker from "./CurrentLocationMarker";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCoordinates: [
        [10, 10],
        [-40, -30],
        [-30, -35],
      ],
      randomCoordinates: [],
      apiCoordinates: [],
    };
  }

  componentDidMount() {
    // this.generateRandomCoordinates();
    // this.frenchGovApi();
  }

  generateRandomCoordinates =  () => {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
      let lat = (Math.random() * (90 - -90) + -90).toFixed(6);
      let lon = (Math.random() * (180 - -180) + -180).toFixed(6);
      arr.push({ lat, lon });
    }
    this.setState({ randomCoordinates: arr });
  };

  frenchGovApi = async () => {
    await fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ apiCoordinates: response.features });
      });
  };

  render() {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CurrentLocationMarker />

        {this.state.myCoordinates.length > 0 &&
          this.state.myCoordinates.map((coordinate, index) => (
            <Marker
              position={[coordinate[0], coordinate[1]]}
              icon={supplier}
              key={index}
            >
              <Popup>
                {coordinate}
              </Popup>
            </Marker>
          ))}

        {this.state.randomCoordinates.length > 0 &&
          this.state.randomCoordinates.map((coordinate, index) => (
            <Marker
              position={[coordinate.lat, coordinate.lon]}
              icon={supplier}
              key={index}
            >
              <Popup>{index}</Popup>
            </Marker>
          ))}

        {this.state.apiCoordinates.length > 0 &&
          this.state.apiCoordinates.map((marker, index) => (
            <Marker
              position={[
                marker.geometry.coordinates[1],
                marker.geometry.coordinates[0],
              ]}
              icon={supplier}
              key={index}
            >
              <Popup>{marker.properties.label}</Popup>
            </Marker>
          ))}
      </MapContainer>
    );
  }
}
