import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  foo(): string {
    return 'foo';
  }
}
