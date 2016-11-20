
import { Injectable } from '@angular/core';
import { Worker } from './church.model';
import { WORKERS } from './in.memory.db.service';

@Injectable()
export class ChurchService {
 getWorkers(): Promise<Worker[]> {
    return Promise.resolve(WORKERS);
  }
}