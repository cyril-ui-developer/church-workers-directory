
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { WORKERS } from './in.memory.db.service';
import 'rxjs/add/operator/toPromise';
import { Worker } from './church.model';

@Injectable()
export class ChurchService {
//  getWorkers(): Promise<Worker[]> {
//     return Promise.resolve(WORKERS);
//   }


  private headers = new Headers({'Content-Type': 'application/json'});
  private churchWorkersEndPoint = 'app/workers';  // URL to web api
  private timeInMs = Date.now();

  constructor(private http: Http) { }

  getWorkers(): Promise<Worker[]> {
    return this.http.get(this.churchWorkersEndPoint)
               .toPromise()
               .then(response => response.json().data as Worker[])
               .catch(this.handleError);
  }
  
  create(firstname: string, lastname: string,gender:string, address:string,email:string,phone:string, serviceUnit:string, birthday:Date, joined:Date): Promise<Worker> {
    return this.http
      .post(this.churchWorkersEndPoint, JSON.stringify({firstname: firstname, lastname: lastname,gender:gender, address:address, email:email, serviceUnit:serviceUnit,  phone:phone, birthday:birthday,joined: this.timeInMs}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
  const endPoint = `${this.churchWorkersEndPoint}/${id}`;
  return this.http.delete(endPoint, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
  //  create(firstname: string): Promise<Worker> {
  //   return this.http
  //     .post(this.churchWorkersEndPoint, JSON.stringify({firstname: firstname}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}