import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import {Store} from "../../../store";

export interface Song {
  id: number,
  track: string,
  favourite: boolean,
  listened: boolean
}

@Injectable()
export class SongsService{

  getPlaylist$ = this.http.get("/api/playlist")
    .map(res => res.json())
    .do(next => this.store.set("playlist", next));

  constructor(
    private http: Http,
    private store: Store
  ){}

  toggle(event:any){

    this.http.put(`/api/playlist/${event.track.id}`, event.track)
      .map(res => res.json())
      .subscribe(() => {
        const value = this.store.value.playlist;

        const playlist = value.map((song: Song) => {
          if(song.id === event.track.id){
            return {...song, ...event.track}
          }else{
            return song;
          }
        });

        this.store.set("playlist", playlist);

      })

  }

}
