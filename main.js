const stockUpdate = document.querySelector(".stock-update");
let stockMessage = "";

setTimeout(() => {
	fetch("https://panel.bangladeshdeal.com/api/product-core/samsung-guru-music-2-20pcs-combo/3052/", { method: "GET" })
		.then((res) => res.json())
		.then((data) => stockChecker(data))
		.catch((error) => location.reload());
	// .catch((error) => console.error("Error:", error));
}, 5000);

function stockChecker(data) {
	if (data.stock === 0) {
		stockMessage = `<h3 class='red'>Guru stock out. Rechecking now...</h3>`;
		stockUpdate.innerHTML = stockMessage;

		location.reload();
	} else {
		stockMessage = `<h3 class='green'>Guru ${data.stock} PCs stock again.</h3>`;
		stockUpdate.innerHTML = stockMessage;

		alert(`Hurry up, Guru ${data.stock} PCs stock again.`);
	}
}
