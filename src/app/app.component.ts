import { Component,computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 title = 'signal-project-myapp';
 //1st example
  firstname = signal('changuna');
  lastname =signal('dhamanekar');
  fullname =computed(()=>this.firstname() + ' ' + this.lastname());
 lname: any;

  changeFirstName(fname: any) {
  //   this.firstname = fname;
  this.firstname.set(fname);
  }

  changeLastName(lname: any) {
    // this.lastname = lname;
    this.lastname.set(lname);
  }




  
//2nd example
  qty = signal<number>(5);


  onDecreaseQty(){
    this.qty.update(q =>q-1);
  }

  onIncreaseQty(){
    this.qty.update(q =>q+1);
  }
  



  //3rd example

 


  
}

