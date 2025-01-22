import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { TypeCardCredit } from '../../../../core/models/card-credit.model';
import { UserDataService } from '../../../../core/services/user-data/user-data.service';
import { generateUUid } from '../../../../shared/utils/generate-uuid.util';

@Component({
  selector: 'app-my-card-credit',
  templateUrl: './my-card-credit.component.html',
  styleUrl: './my-card-credit.component.css'
})
export class MyCardCreditComponent implements OnInit {

  private user = inject(UserDataService);
  private doc = inject(DocumentsService);

  type = TypeCardCredit;

  form = new FormGroup({
    id: new FormControl(''),
    idUser: new FormControl(''),
    type: new FormControl(this.type.CREDIT, [Validators.required]),
    username: new FormControl('', [Validators.required]),
    number: new FormControl(0, [Validators.required]),
    cvv: new FormControl(0, [Validators.required]),
    expirationDate: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.user.getDataUser().subscribe({
      next: (user) => {
        this.form.get('idUser')?.setValue(user.id);
      }
    })
  }


  onSubmit() {
    this.form.get('id')?.setValue(generateUUid());
    this.doc.setDocument('bank-card', this.form.value).subscribe({
      next: (res) => {
        this.form.reset();
        console.log('res', res);
      }
    })
  }
}
