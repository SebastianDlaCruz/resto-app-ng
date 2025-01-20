import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeUser } from '../../../../core/models';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.css'
})
export class MyDataComponent {

  form = new FormGroup({
    id: new FormControl(''),
    userName: new FormControl(''),
    zipCode: new FormControl(''),
    locality: new FormControl(''),
    street: new FormControl(''),
    floor: new FormControl(0),
    number: new FormControl(0),
    contact: new FormControl(0),
    email: new FormControl(''),
    clarification: new FormControl(),
    type: new FormControl(TypeUser)
  })
}
