import React from "react";

export const Historial = ({ historico }) => {
	return (
		<div>
			<table className="table table-responsive-sm table-bordered table-hover">
				<thead className="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Mes</th>
						<th scope="col">Ciudad</th>
						<th scope="col">Humedad</th>
						<th scope="col">Temperatura</th>
					</tr>
				</thead>
				<tbody>
					{historico.map(({ ciudad, humedad, mes, temperatura }, index) => (
						<tr>
							<th scope="row">{index + 1}</th>
							<td>{mes}</td>
							<td>{ciudad}</td>
							<td>{humedad} % </td>
							<td>{temperatura} C°</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
