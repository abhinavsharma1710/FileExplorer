import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./block1.component.css']
})
export class Block1Component implements OnInit {
  constructor() {}
  genders = ['Male', 'Female', 'Transgender']
  signupForm : FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'gender':new FormControl('Male')
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
  
}
