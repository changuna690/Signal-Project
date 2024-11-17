import { Component,computed,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  title = 'signal-project-myapp';
//   firstname = signal('changuna');
//   lastname =signal('dhamanekar');
//   fullname =computed(()=>this.firstname() + ' ' + this.lastname());
//  lname: any;

//   changeFirstName(fname: any) {
//   //   this.firstname = fname;
//   this.firstname.set(fname);
//   }
//   changeLastName(lname: any) {
//     // this.lastname = lname;
//     this.lastname.set(lname);
//   }
 
}
