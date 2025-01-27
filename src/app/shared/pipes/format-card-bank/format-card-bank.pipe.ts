import { inject, Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DocumentsService } from '../../../core/firebase/documets/documents.service';
import { CardCredit } from '../../../core/models/card-credit.model';
import { TypeCardBank } from '../../../core/models/type-card-bank.model';

@Pipe({
  name: 'formatCardBank'
})
export class FormatCardBankPipe implements PipeTransform {

  private docs = inject(DocumentsService);

  transform(value: CardCredit): Observable<string> {

    return this.docs.getDocuments<TypeCardBank[]>('types-bank-cards').pipe(
      map(res => {

        const number = value.number;

        const typeCard = res.find(cardType => {
          const init = cardType.value.inicio;
          const end = cardType.value.fin;

          const valueNumberInit = number.slice(0, init.length);
          const valueNumberEnd = number.slice(-end.length);

          return valueNumberInit.includes(init) || valueNumberEnd.includes(end);
        });

        return typeCard ? typeCard.name : "";


      })
    )

  }

}
