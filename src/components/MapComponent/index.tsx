import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { sanctuaries } from 'src/data/sanctuaries';

const MapComponent = () => {
	const greenIcon = new L.Icon({
		iconUrl: '/marker-icon-2x-green.png',
		shadowUrl: '/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	const blueIcon = new L.Icon({
		iconUrl: '/marker-icon-2x-blue.png',
		shadowUrl: '/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});
	return (
		<MapContainer
			center={[49.981219, 8.281827]}
			zoom={9}
			scrollWheelZoom={true}
			style={{ height: '100%', width: '100%', borderRadius: '10px' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{sanctuaries.map((sanctuary) => (
				<Marker
					icon={sanctuary.icon === 'green' ? greenIcon : blueIcon}
					key={sanctuary.position[0]}
					position={sanctuary.position as [number, number]}
				>
					<Popup>
						<a key={sanctuary.address} href={sanctuary.link} target='_blank'>
							{sanctuary.title}
						</a>
						<br />
						{sanctuary.address}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};
export default MapComponent;
