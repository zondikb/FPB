import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
// import {bulmaAccordion} from 'bulma-accordion'
import * as bulmaAccordion from 'bulma-accordion';

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  styleUrls: ['./fqa.component.css']
})
export class FqaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    
  }
  
  //  accordions = bulmaAccordion.attach();
}
