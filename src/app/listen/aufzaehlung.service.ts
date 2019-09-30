import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AufzaehlungService {
  constructor() {}

  getValues() {
    return ['Günther', 'Hans'];
  }
}
