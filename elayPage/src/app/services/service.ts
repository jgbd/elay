// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Request, RequestMethod } from '@angular/http';
import {NgForm} from '@angular/forms';

import 'rxjs/add/operator/toPromise';

// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()
export class Service {
    private url = "http://localhost:3000/";
	private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
	private headersPost = new Headers({ 'Content-Type': '' });
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }
    // Definimos un método que recibe un parámetro y devuelve un string
    setPQRS(formData : FormData ) : Promise<any>{

		var form = {
			'email':formData.get('email'),
			'phone': formData.get('phone'),
			'pqrs': formData.get('pqrs')
		};
		
		var json = JSON.stringify(form);
		var body = 'json='+json;

		return this.http.post(this.url+'setPQRS',body, this.options)
			.toPromise()
			.then(response => response.json())
			.catch(err => false);
    }
}