const urlLocal = "http://test.lyssoluciones.com/api/data.json";

export const getData = async ruta => {
	const url = urlLocal;

	const resp = await fetch(url);
	const data = await resp.json();

	return data;
};
