import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
   //3rd example

   product =signal({
    name:'laptop',
    category:'Electronics',
    price:2000,
    rating:4.5,
  });

  changeProductName(){
    //this.product.mutate(product =>product.mobile)
  }




}
