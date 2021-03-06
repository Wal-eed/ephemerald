import React from "react";
import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet"
import { Event, Location } from "../interfaces/Event";
import "leaflet/dist/leaflet.css";
import "./Map.css"

const attribution = "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>";
// https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg
// Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors

interface Props {
	me: Location;
	events: Event[];
	visible: boolean;
}

const Map: React.FC<Props> = ({ me, events, visible }) => {
	const mapRef = React.useRef<any>();

	React.useEffect(() => {
		mapRef?.current?.invalidateSize();
	}, [visible]);

	return (
		<MapContainer
			center={[-33.917, 151.231]}
			zoom={18}
			whenCreated={(mapInstance) => {
				mapRef.current = mapInstance;
			}}
		>
			<TileLayer
				url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				attribution={attribution}
			/>

			<Circle
				center={me}
				radius={5}
				pathOptions={{ color: "#0099ff" }}
			/>

			{events.map((event) => (
				<Circle
					key={JSON.stringify(event)}
					center={event.location}
					radius={event.radius}
					pathOptions={{ color: "#1db954" }}
				>
					<Tooltip direction="center" opacity={1} permanent>
						{event.name}<br />{event.attendance} people
					</Tooltip>
				</Circle>
			))}
		</MapContainer>
	);
}

export default Map;

