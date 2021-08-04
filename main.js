const stockUpdate = document.querySelector(".stock-update");

fetch("https://panel.bangladeshdeal.com/api/product-core/samsung-guru-music-2-20pcs-combo/3052/", { method: "GET" })
	.then((res) => res.json())
	.then((data) => stockChecker(data))
	.catch((error) => location.reload());
// .catch((error) => console.error("Error:", error));

function stockChecker(data) {
	if (data.stock === 0) {
		location.reload();
	} else {
		let stockMessage = `<h3>Guru ${data.stock} PCs stock again.</h3>`;
		stockUpdate.innerHTML = stockMessage;
		alert(`Hurry up, Guru PCs stock again.`);
	}
}
