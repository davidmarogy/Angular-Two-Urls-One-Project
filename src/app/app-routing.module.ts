import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {environment} from "../environments/environment";
import {RetailerComponent} from "./retailer/retailer.component";
import {CustomerComponent} from "./customer/customer.component";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {
    matcher: url => {
      if (environment.customerUrl.includes(location.origin))
      {
        return {consumed: url};
      }
      return null;
    },
    component: CustomerComponent,
  },
  {
    matcher: url => {
      if (
        environment.retailerUrL.includes(location.origin)
      ) {
        return {consumed: url};
      }
      return null;
    },
    component: RetailerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
