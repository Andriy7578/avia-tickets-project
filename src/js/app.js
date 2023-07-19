import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUi from "./views/form";
import ticketsUi from "./views/tickets";
import currencyUi from "./views/currency";
import favorite from "./store/favorites";
import favoritesCardUi from "./views/favoritesCard";

document.addEventListener("DOMContentLoaded", () => {
	initApp();

	const form = formUi.form;
	const tickets_sections = document.querySelector(".tickets-sections");

	// Events
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		onFormSubmit();
	});

	tickets_sections.addEventListener("click", ({ target }) => {
		onAddToFavoritesBtn(target);
	});

	// Handlers
	async function initApp() {
		await locations.init();
		formUi.setAutocompleteData(locations.shortCitiesList);
	}

	async function onFormSubmit() {
		// зібрати дані з інпутів
		const origin = locations.getCityCodeByKey(formUi.originValue);
		const destination = locations.getCityCodeByKey(formUi.destinationValue);
		const depart_date = formUi.departDateValue;
		const return_date = formUi.returnDateValue;
		const currency = currencyUi.currencyValue;
		// Code,  Code, 2019-09, 2019-10

		console.log(origin, destination, depart_date, return_date);

		await locations.fetchTickets({
			origin,
			destination,
			depart_date,
			return_date,
			currency,
		});

		console.log(locations.lastSearch);

		ticketsUi.renderTickets(locations.lastSearch);
	}

	function onAddToFavoritesBtn(target) {
		if (target.classList.contains("add-favorite")) {
			const parent = target.closest(".ticket-card");

			// favoritesCardUi.renderFavoriteCard(favorite.getDataTickets(parent));

			const favoriteTicketsData = favorite.getDataTickets(parent);
			favoritesCardUi.renderFavoriteCard(favoriteTicketsData);
		}
	}
});
