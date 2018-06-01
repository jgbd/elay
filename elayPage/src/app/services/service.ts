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
	private headersPost = new Headers({ 'Content-Type': 'multipart/form-data' });
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }
    // Definimos un método que recibe un parámetro y devuelve un string
    setPQRS(formData : FormData ) : Promise<any>{

		var form = {
			'email':formData.get('email'),
			'phone': formData.get('phone'),
			'pqrs': formData.get('pqrs')
		}

		return this.http.post(this.url+'setPQRS',{'form':form},this.options)
			.toPromise()
			.then(response => response.json())
			.catch(err => false);
    }
}