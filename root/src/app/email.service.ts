import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // constructor() { }
  constructor(logService: LogService) { }
}
