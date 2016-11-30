import { Component, OnInit } from '@angular/core';
import { Worker } from './church.model';
import { ChurchService  } from './church.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title :string = 'app works!';
  gender:string;
  serviceUnit: string; 
  serviceUnits :any = [{unitId:1, unitName:"Prayers"},{unitId:2, unitName:"Sunday School"},{unitId:2, unitName:"Children"}];
  workers: Worker[];
  selectedWorker: Worker;

  
  constructor(private churchService: ChurchService ){
  
  }

  getWorkers(): void {
    this.churchService
        .getWorkers()
        .then(workers => this.workers = workers);
  }


  genderFunc(element: HTMLInputElement): void {
        this.gender = element.value;        
    }
  
  serviceUnitFunc(element: HTMLSelectElement):void{
        this.serviceUnit = element.value;       
 }     
    
  addWorker(firstname: string,lastname: string,address:string,email:string,phone:string, birthday:Date, joined:Date): void {
    firstname = firstname.trim();
    lastname = lastname.trim();
    address = address.trim();
    email= email.trim();
    phone = phone.trim();
  
   
    if (!firstname && !lastname  && !this.gender && !address && !email && !phone && !this.serviceUnit  && !birthday) { 
      return;
     }
    this.churchService.create(firstname, lastname, this.gender, address, email ,phone, this.serviceUnit ,birthday, joined)
      .then(worker => {
        this.workers.push(worker);
        this.selectedWorker = null;
      });
    
  }



  deleteWorker(worker: Worker): void {
    this.churchService
        .delete(worker.id)
        .then(() => {
          this.workers = this.workers.filter(h => h !== worker);
          if (this.selectedWorker === worker) { this.selectedWorker = null; }
        });
  }



   ngOnInit(): void {
    this.getWorkers();
  }

  onSelectWorker(worker: Worker): void {
    this.selectedWorker = worker;
  }

}
