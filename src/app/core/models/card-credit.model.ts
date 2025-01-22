export enum TypeCardCredit {
  DEBIT = 'debit',
  CREDIT = 'credit'
}

export interface CardCredit {
  id: string;
  idUser: string;
  type: TypeCardCredit;
  username: string;
  number: string;
  cvv: string;
  expirationDate: string;
}
