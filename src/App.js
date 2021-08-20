import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { StaticMap } from "react-map-gl";
import { Historial } from "./components/Historial";
import { Widget } from "./components/Widget";
import { getData } from "./service/Http";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {
	const [viewport, setViewport] = useState({
		longitude: -85.45,
		latitude: 38.78,
		zoom: 3
	});
	const [info, setinfo] = useState([]);

	useEffect(() => {
		getData("datos").then(data => {
			setinfo(data);
			// console.log(info);
		});
	}, []);

	const { ciudades = [], historico = [] } = info;
	// console.log(historico);

	return (
		<div>
			<ReactMapGL
				mapboxApiAccessToken={
					"pk.eyJ1IjoibGVvZGlzdHJpdGFsIiwiYSI6ImNrc2l6c283bDI4eXIybnM2M2dpdDJ3eXcifQ.uJ7XsqTrUlDIM0qSmMNVfQ"
				}
				{...viewport}
				width="95vw"
				height="70vh"
				onViewportChange={setViewport}
				mapStyle={"mapbox://styles/mapbox/streets-v11"}
			>
				{ciudades.map(({ hora, lat, lon, nombre, temperatura }) => (
					<Marker
						key={nombre}
						latitude={lat}
						longitude={lon}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<div>
							<div className="acf-map__container">
								<div className="acf-map">
									<Widget
										nombre={nombre}
										hora={hora}
										temperatura={temperatura}
									/>
								</div>
							</div>
						</div>
					</Marker>
				))}
			</ReactMapGL>
			<br />
			<Historial historico={historico} />
		</div>
	);
}

export default App;
