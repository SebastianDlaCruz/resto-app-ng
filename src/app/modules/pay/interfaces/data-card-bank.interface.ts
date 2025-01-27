import { Observable } from "rxjs";
import { CardCredit } from "../../../core/models/card-credit.model";

export interface DataCardBank {
  getCardBank(): Observable<CardCredit[]>;
}
