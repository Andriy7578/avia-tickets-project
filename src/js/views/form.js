import {
	getAutocompleteInstance,
	getDatepickerInstance,
} from "../plugins/materialize";

class FormUi {
	constructor(autocompleteInstance, datePickerInstance) {
		this._form = document.forms["locationControls"];
		this.origin = document.getElementById("autocomplete-origin");
		this.destination = document.getElementById("autocomplete-destination");
		this.depart = document.getElementById("datepicker-depart");
		this.return = document.getElementById("datepicker-return");
		this.originAutocomplete = autocompleteInstance(this.origin);
		this.destinationAutocomplete = autocompleteInstance(this.destination);
		this.departDatePicker = datePickerInstance(this.depart);
		this.returnDatePicker = datePickerInstance(this.return);
	}

	get form() {
		return this._form;
	}

	get originValue() {
		return this.origin.value;
	}

	get destinationValue() {
		return this.destination.value;
	}

	get departDateValue() {
		return this.departDatePicker.toString();
	}

	get returnDateValue() {
		return this.returnDatePicker.toString();
	}

	setAutocompleteData(data) {
		this.originAutocomplete.updateData(data);
		this.destinationAutocomplete.updateData(data);
	}
}

const formUi = new FormUi(getAutocompleteInstance, getDatepickerInstance);

export default formUi;
