import { Component, inject, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { heroPencil, heroTrash } from '@ng-icons/heroicons/outline';
import { DocumentsService } from '../../../core/firebase/documets/documents.service';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-items-admin',
  templateUrl: './items-admin.component.html',
  styleUrl: './items-admin.component.css'
})
export class ItemsAdminComponent {

  @ViewChild(ModalConfirmComponent) modal?: ModalConfirmComponent;

  private docs = inject(DocumentsService);
  @Input() items: any[] = [];
  @Input() type: string = "";
  @Input() router = inject(Router);
  state = false;

  pencil = heroPencil;
  trash = heroTrash;

  onClick(id: string) {
    const refModal = this.modal?.config('¿Eliminar categoría?')
    this.modal?.open();

    refModal?.subscribe(res => {
      if (res) {
        this.state = true;
        this.docs.delete(id, this.type).subscribe({
          next: () => {
            this.state = false;
          }
        })
      }

    })
  }

  onEditDishes(id: string) {
    this.router.navigate([`admin/platos/editar`, id]);
  }


  onEditCategory(id: string) {
    this.router.navigate([`admin/categorias/editar`, id]);
  }

}
