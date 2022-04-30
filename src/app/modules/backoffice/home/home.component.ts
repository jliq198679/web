import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Expense Manager';
   isUserLoggedIn = false;

   constructor(private authService: AuthService) {}

   ngOnInit() {
      /*let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else


         this.isUserLoggedIn = false;*/
   }

}
