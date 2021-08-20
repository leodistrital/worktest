import React from "react";

export const Widget = ({ nombre, temperatura, hora }) => {
	return (
		<div className="daybox">
			<label>
				<div className="top">
					<div className="moon" />
					<div className="cloud">
						<div className="rain" />
						<div className="rain rain2" />
						<div className="rain rain3" />
					</div>

					<div className="text_area">
						<div className="teperature">{temperatura}</div>
						<div className="infos">
							<div className="address">{nombre}</div>
							<div className="time">Time {hora}</div>
						</div>
					</div>
				</div>
			</label>
		</div>
	);
};
