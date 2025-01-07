import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {

  @ViewChild('dialog') private dialog?: ElementRef<HTMLDialogElement>;
  private state$ = new Subject<boolean>();

  text?: string;

  private onDialog() {
    return this.dialog?.nativeElement;
  }

  config(text: string) {
    this.text = text;
    return this.state$.asObservable();
  }


  open() {
    this.onDialog()?.showModal();
  }

  closetCancel() {
    this.state$.next(false);
    this.onDialog()?.close();
  }

  closetAccept() {
    this.state$.next(true);
    this.onDialog()?.close();
  }

}
