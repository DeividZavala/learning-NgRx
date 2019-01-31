import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import {Store} from "../../../store";

@Injectable()
export class SongsService{

  getPlaylist$ = this.http.get("/api/playlist")
    .map(res => res.json())
    .do(next => this.store.set("playlist", next));

  constructor(
    private http: Http,
    private store: Store
  ){}

}
