import { Component } from "react";
import "./styles.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import supplier from "../../assets/supplier_marker"
import CurrentLocationMarker from "./CurrentLocationMarker";

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coordinates: [
                [10, 10],
                [-40, -30],
                [-30, -35]
            ],
            markers: [],
            coordinatesRandom: []
        }
    }

    componentDidMount() {
        fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
            .then((response) => response.json())
            .then((response) => {
                this.setState({ markers: response.features });
            });
        const responseRandom = this.generateRandomCoordinates()
        this.setState({ coordinatesRandom: responseRandom })
    }

    generateRandomCoordinates = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            let lat = (Math.random() * (-21.5 - -24.0) + -24.0).toFixed(6);
            let long = (Math.random() * (-44.0 - -41.8) + -41.8).toFixed(6);
            arr.push({ lat, long });
        }
        return arr
    };


    render() {
        return (
            <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <CurrentLocationMarker />

                {this.state.markers.length > 0 &&
                    this.state.markers.map((marker, index) => (
                        <Marker
                            position={[
                                marker.geometry.coordinates[1],
                                marker.geometry.coordinates[0]
                            ]}
                            icon={supplier}
                            key={index}
                        >
                            <Popup>{marker.properties.label}</Popup>
                        </Marker>
                    ))}

                {this.state.coordinates.length > 0 &&
                    this.state.coordinates.map((coordinate, index) => (
                        <Marker
                            position={[
                                coordinate[0],
                                coordinate[1]
                            ]}
                            icon={supplier}
                            key={index}
                        >
                            <Popup>{index}</Popup>
                        </Marker>
                    ))}

                {this.state.coordinatesRandom.length > 0 &&
                    this.state.coordinatesRandom.map((coordinateRandom, index) => (
                        <Marker
                            position={[
                                coordinateRandom.lat,
                                coordinateRandom.long
                            ]}
                            icon={supplier}
                            key={index}
                        >
                            <Popup>{coordinateRandom.lat} {coordinateRandom.long}</Popup>
                        </Marker>
                    ))}


            </MapContainer>

        )
    }
}