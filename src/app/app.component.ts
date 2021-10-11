import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (environment.customerUrl.includes(location.origin)) {
      this.router.navigate(['/customer-home'])
    } else{
      this.router.navigate(['/retailer-home'])
    }
  }
}
