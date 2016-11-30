import { Component,Input } from '@angular/core';
import { Worker } from '../church.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {
 @Input() worker: Worker;

  constructor() { }


}
