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

    workers: Worker[];
    selectedWorker: Worker;

  constructor(
    private churchService: ChurchService
   // private router: Router) { }
  ){}
  getWorkers(): void {
    this.churchService
        .getWorkers()
        .then(workers => this.workers = workers);
  }

 addWorker(): void {
    this.workers.push({
	"id":6,
	"firstname": "Faith2",
	"lastname": "Ajieh2",
	"gender": "F",
	"address": "3908 SW Feather St., Bentonville, AR 72712",
	"phone": "3001230000",
	"email": "faith3@cyrilajieh.com",
	"serviceUnit": "Sanctuary",
	"birthday": "03-02-1993",
	"joined": "11-21-2016"

});
  }

   ngOnInit(): void {
    this.getWorkers();
  }

  onSelectWorker(worker: Worker): void {
    this.selectedWorker = worker;
  }

}
