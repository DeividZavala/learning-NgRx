import {State} from "./state";
import {BehaviorSubject, Observable} from "rxjs";

const state: State = {
  playlist: undefined
};

export class Store{

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value(){
    return this.subject.value;
  }

  select<T>(name): Observable<T>{
    return this.store.pluck(name)
  }

  set(name: string, state: any){
    this.subject.next({
      ...this.value,
      [name]: state
    })
  }

}
