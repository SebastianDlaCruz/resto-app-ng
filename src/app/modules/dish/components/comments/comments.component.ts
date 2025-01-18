import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { User } from '../../../../core/models';
import { generateUUid } from '../../../../shared/utils/generate-uuid.util';
import { Comment } from '../../models/coment.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  private doc = inject(DocumentsService);
  private user: Store<{ user: User }> = inject(Store);
  @Input() idDish: string | undefined = "";
  comments: Comment[] = [];

  form = new FormGroup({
    id: new FormControl(''),
    idDish: new FormControl(''),
    username: new FormControl(''),
    date: new FormControl(''),
    qualification: new FormControl(0, [Validators.required]),
    comment: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.doc.getDocuments<Comment[]>('comments').subscribe({
      next: (value) => {
        this.comments = value;
      }
    })

    this.user.select('user').subscribe(user => {
      console.log(user);
      this.form.get('username')?.setValue(user.userName)
    })
  }

  onSubmit() {
    this.form.get('id')?.setValue(generateUUid());
    this.form.get('date')?.setValue(new Date().toISOString());
    this.form.get('idDish')?.setValue(this.idDish || '');

    this.doc.setDocument('comments', this.form.value).subscribe({
      next: () => {
        console.log('exito');
        this.form.reset();
      }
    });
  }
}
