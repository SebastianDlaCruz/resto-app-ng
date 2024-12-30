
import { DocumentData, onSnapshot, Query, QuerySnapshot } from "@angular/fire/firestore"
import { Observable } from "rxjs"

export const onSnapshotObserver = (ref: Query<DocumentData, DocumentData>): Observable<QuerySnapshot<DocumentData, DocumentData>> => {

  return new Observable(observer => {
    return onSnapshot(ref,
      ((snapshot: QuerySnapshot<DocumentData, DocumentData>) => observer.next(snapshot)),
      ((error: unknown) => observer.error(error))

    )
  })

}
