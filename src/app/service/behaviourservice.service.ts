import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourserviceService {
  public message = new BehaviorSubject<any>(null)
  constructor() { 
    this.message.next("s");
  }
}
