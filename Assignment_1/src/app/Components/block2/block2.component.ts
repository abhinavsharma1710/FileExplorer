import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component implements OnInit {
  constructor() { }
  @ViewChild("form") formData : NgForm;
  defaultValue = "har";
  answer = '';
  ngOnInit(): void {
    
  }

  formSubmit(){
    console.log(this.formData)
    this.formData.reset();
  }

 

}
