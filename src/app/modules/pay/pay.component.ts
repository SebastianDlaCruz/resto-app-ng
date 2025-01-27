import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { DocumentsService } from '../../core/firebase/documets/documents.service';
import { Cart, User } from '../../core/models';
import { CardCredit, TypeCardCredit } from '../../core/models/card-credit.model';
import { TypeRetreat } from './model/pay.model';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent implements OnInit {

  type = TypeRetreat;
  TypeCardCredit = TypeCardCredit;

  private store: Store<{ cart: Cart, user: User }> = inject(Store);
  private docs = inject(DocumentsService);

  shipment = "";
  cart?: Cart;
  cards: CardCredit[] = [];
  typeCart = "";

  form = new FormGroup({
    id: new FormControl(''),
    idUser: new FormControl(''),
    shipment: new FormControl(this.type.LOCAL),
    typeCard: new FormControl(TypeCardCredit.DEBIT),
    numberCadt: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl('')
  })


  ngOnInit(): void {

    this.store.select('cart').subscribe(cart => {
      this.cart = cart;
    })

    combineLatest([
      this.store.select('user'),
      this.form.get('typeCard')!.valueChanges.pipe(
        startWith(this.form.get('typeCard')!.value)
      ),
    ]).pipe(
      switchMap(([user, typeCart]) => {
        this.typeCart = typeCart ?? '';
        return this.docs.getDocumentsById<CardCredit[]>(user.id, 'idUser', 'bank-card');
      }),
      map(cards => cards.filter(card => card.type === this.typeCart))
    ).subscribe({
      next: (cards) => {
        this.cards = cards;
        console.log('cards', cards);
      }
    });


    this.changeShipment();
  }


  changeShipment() {
    this.form.get('shipment')?.valueChanges.subscribe(res => {
      if (res) {
        this.shipment = res;
      }
    })
  }




}
