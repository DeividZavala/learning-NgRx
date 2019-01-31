import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable} from "rxjs";

@Component({
  selector: "songs-listened",
  template: `
    <div class="songs">
      <div *ngFor="let song of listened$ | async">
        <strong>{{song.artist}}</strong>
        {{song.track}}
      </div>
    </div>
  `
})
export class SongsListenedComponent implements OnInit{
  listened$: Observable<any[]>;
  constructor(
    private store: Store,
  ){}

  ngOnInit() {
    this.listened$ = this.store.select("playlist")
      .filter(Boolean)
      .map(playlist => playlist.filter(song => song.listened))
  }

}
