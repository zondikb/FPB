import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name;
  contactnumber;
  email;
  comment;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    // const name= "`my name is ${this.name}`";
    const name= "Your form is Submitted  " ;
    alert(name);
  }

}
