import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable} from "rxjs";


@Component({
  selector: "songs-favourites",
  template: `
    <div class="songs">
      <div *ngFor="let song of favourites$ | async">
        <strong>{{song.artist}}</strong>
        {{song.track}}
      </div>
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit{

  favourites$: Observable<any[]>;
  constructor(
    private store: Store
  ){}

  ngOnInit() {
    this.favourites$ = this.store.select("playlist")
      .filter(Boolean)
      .map(playlist => playlist.filter(song => song.favourites))
  }

}
