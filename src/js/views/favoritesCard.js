class FavoritesCardUi {
	constructor() {
		this.container = document.querySelector(".dropdown-content");
	}

	renderFavoriteCard(favoriteCardData) {
		let fragment = "";

		const favoriteCard = FavoritesCardUi.favoriteCardTemplate(favoriteCardData);

		fragment += favoriteCard;
		this.container.insertAdjacentHTML("afterbegin", fragment);

		this.container.addEventListener("click", ({ target }) => {
			this.onDeleteBtn(target);
		});
	}

	static favoriteCardTemplate(favoriteCardData) {
		return `
		<div class="favorite-container">
		<div class="favorite-item d-flex align-items-start">
		<img
			src="${favoriteCardData.airline_logo}"
			class="favorite-item-airline-img"
		/>
		<div class="favorite-item-info d-flex flex-column">
			<div
				class="favorite-item-destination d-flex align-items-center"
			>
				<div class="d-flex align-items-center mr-auto">
					<span class="favorite-item-city">${favoriteCardData.origin_name}</span>
					<i class="medium material-icons">flight_takeoff</i>
				</div>
				<div class="d-flex align-items-center">
					<i class="medium material-icons">flight_land</i>
					<span class="favorite-item-city">${favoriteCardData.destination_name}</span>
				</div>
			</div>
			<div class="ticket-time-price d-flex align-items-center">
				<span class="ticket-time-departure">${favoriteCardData.departure_at}</span>
				<span class="ticket-price ml-auto">${favoriteCardData.price}</span>
			</div>
			<div class="ticket-additional-info">
				<span class="ticket-transfers">${favoriteCardData.transfers}</span>
				<span class="ticket-flight-number">${favoriteCardData.flight_number}</span>
			</div>
			<a
				class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
				>Delete</a
			>
		</div>
	</div>
	
		`;
	}

	onDeleteBtn(target) {
		if (target.classList.contains("delete-favorite")) {
			const parent = target.closest(".favorite-container");
			this.container.removeChild(parent);
		}
	}
}

const favoritesCardUi = new FavoritesCardUi();

export default favoritesCardUi;
