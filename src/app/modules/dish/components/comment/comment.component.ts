import { Component, Input } from '@angular/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { Comment } from '../../models/coment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment?: Comment;
  startIcon = heroStarSolid;
  get qualification() {
    if (this.comment) {

      return Array.from({ length: this.comment.qualification }, (_, index) => index + 1);
    }

    return [];
  }

}
