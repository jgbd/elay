import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Service } from '../services/service';
import { Alert } from 'selenium-webdriver';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent {

	email: string = '';
	phone: string = '';
	pqrs: string = '';


	constructor(
		private service: Service
	) { }

	ngOnInit() {
	}

	onSubmit() {
		// alert("1")
		var formData = new FormData();

		formData.append('email', this.email + '');
		formData.append('phone', this.phone + '');
		formData.append('pqrs', this.pqrs + '');

		this.service.setPQRS(formData).
			then(pqs => {
				alert("si funciona")
			});
	}

	loginForm: NgForm;

	@ViewChild('loginForm') currentForm: NgForm;

	ngAfterViewChecked() {
		this.formChanged();
	}

	formChanged() {
		if (this.currentForm === this.loginForm) { return; }
		this.loginForm = this.currentForm;
		if (this.loginForm) {
			this.loginForm.valueChanges
				.subscribe(data => this.onValueChanged(data));
		}
	}

	onValueChanged(data?: any) {
		if (!this.loginForm) { return; }
		const form = this.loginForm.form;

		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);

			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	formErrors = {
		'email': '',
		'phone': '',
		'pqrs': ''
	};

	validationMessages = {
		'email': {
			'required': 'Email Obligatorio',
			'pattern': 'Email Incorrecto'
		},
		'phone': {
			'maxlength': 'Menos de 15 caracteres'
		},
		'pqrs': {
			'required': 'PQRS Obligatorio',
			'maxlength': 'Menos de 120 caracteres'
		},
	};
}
