import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectionService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  getCep(cep: string) : Promise<Response> {
    return this.http.get("https://viacep.com.br/ws/" + cep.trim() + "/json/").toPromise();
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
