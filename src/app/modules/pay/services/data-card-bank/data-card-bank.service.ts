import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { User } from '../../../../core/models';
import { CardCredit } from '../../../../core/models/card-credit.model';
import { DataCardBank } from '../../interfaces/data-card-bank.interface';

@Injectable({
  providedIn: 'root'
})
export class DataCardBankService implements DataCardBank {

  private store: Store<{ user: User }> = inject(Store);
  private docs = inject(DocumentsService);

  getCardBank(): Observable<CardCredit[]> {
    return this.store.select('user').pipe(
      switchMap(res => this.docs.getDocumentsById<CardCredit[]>(res.id, 'idUser', 'bank-card')),
      map(card => card)
    )
  }
}
