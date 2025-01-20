import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { TypeUser, User } from '../../../../core/models';
import { update } from '../../../../core/store/actions/user.action';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.css'
})
export class MyDataComponent implements OnInit {

  private docs = inject(DocumentsService);
  private user: Store<{ user: User }> = inject(Store);


  form = new FormGroup({
    id: new FormControl(''),
    userName: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    locality: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    floor: new FormControl(0, [Validators.required]),
    number: new FormControl(0, [Validators.required]),
    contact: new FormControl(0, [Validators.required]),
    email: new FormControl(''),
    clarification: new FormControl(),
    type: new FormControl(TypeUser.USER)
  })

  ngOnInit(): void {



    this.user.select('user').pipe(
      switchMap(user => {
        console.log('user', user);
        return this.docs.getDocumentById<User>(user.id, 'id', 'users')
      })
    ).subscribe({
      next: (res) => {

        this.updateForm(res);
      }
    })

  }

  updateForm(user: User) {

    const entries = Object.entries(user);

    for (const [key, value] of entries) {
      if (this.form.get(key)) {
        this.form.get(key)?.setValue(value);
      }
    }

  }

  onSubmit() {
    this.docs.setDocument('users', this.form.value).subscribe({
      next: (res) => {
        this.user.dispatch(update({
          user: this.form.value as User
        }))
      }
    })
  }
}

