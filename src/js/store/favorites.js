class Favorites {
	constructor() {}

	getDataTickets(parent) {
		const airline_logo = parent.querySelector(".ticket-airline-img").src;

		const airline_name = parent.querySelector(
			".ticket-airline-name"
		).textContent;

		const origin_name = parent.querySelector(".origin-city").textContent;

		const destination_name =
			parent.querySelector(".destination-city").textContent;

		const departure_at = parent.querySelector(
			".ticket-time-departure"
		).textContent;

		const price = parent.querySelector(".ticket-price").textContent;

		const transfers = parent.querySelector(".ticket-transfers").textContent;

		const flight_number = parent.querySelector(
			".ticket-flight-number"
		).textContent;

		const dataObj = {
			airline_logo,
			airline_name,
			origin_name,
			destination_name,
			departure_at,
			price,
			transfers,
			flight_number,
		};
		return dataObj;
	}
}

const favorite = new Favorites();

export default favorite;
