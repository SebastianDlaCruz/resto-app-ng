import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { heroXMark } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {

  @Input() title = "";
  @ViewChild('dialog') dialog?: ElementRef<HTMLDialogElement>;

  xIcon = heroXMark;

  open() {
    if (this.dialog) {
      this.dialog.nativeElement.showModal()
    }
  }

  close() {
    if (this.dialog) {
      this.dialog.nativeElement.close()
    }
  }



}
