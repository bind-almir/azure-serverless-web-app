import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'azure-serverless-web-app';

  constructor(public http: HttpClient) { }

  getHello() {
    this.http.get('/api/hello').subscribe(response => console.log(response), err => console.log(err));
  }
}
