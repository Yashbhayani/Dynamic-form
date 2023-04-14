import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.Addnewrow();
   }
 
   title = 'FormArray';
   items!: FormArray;
   userinfoform = new FormGroup({
     blogs: new FormArray([])
   });
 
   ProceedSave() {
     console.log(this.userinfoform.value);
   }
 
   Addnewrow() {
     this.items = this.userinfoform.get("blogs") as FormArray;
     this.items.push(this.Genrow())
   }
   Removeitem(index:any){
     this.items = this.userinfoform.get("blogs") as FormArray;
     this.items.removeAt(index)
   }
 
   get blogs(){
     return this.userinfoform.get("blogs") as FormArray;
   }
 
   Genrow(): FormGroup {
     return new FormGroup({
      name:new FormControl(''),
      });
   }
 
}
