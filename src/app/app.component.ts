import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-hello';
  // ninjaName = 'naruto';

  // ninjaConsole(){
  //   console.log('console ninjaName: ',this.ninjaName);
  // }
  // changeNinjaName(name: string){
  //   this.ninjaName = name;
  // }

  value = 0;
  calBuffet(priceBuffetInput: string){
    var price = Number(priceBuffetInput);
    this.value = (price*3)/4;
  }
  
}
 