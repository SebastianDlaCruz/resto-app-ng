import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { UserDataService } from '../../../../core/services/user-data/user-data.service';
import { generateUUid } from '../../../../shared/utils/generate-uuid.util';
import { Comment } from '../../models/coment.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  private doc = inject(DocumentsService);
  private user = inject(UserDataService);
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

    combineLatest({
      comments: this.doc.getDocuments<Comment[]>('comments'),
      username: this.user.getName()
    }).subscribe({
      next: ({ comments, username }) => {
        this.comments = comments;
        this.form.get('username')?.setValue(username);
      }
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
