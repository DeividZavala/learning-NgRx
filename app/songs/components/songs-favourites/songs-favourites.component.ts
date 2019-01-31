import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable} from "rxjs";


@Component({
  selector: "songs-favourites",
  template: `
    <div class="songs">
      <songs-list
        [list]="favourites$ | async"
      >
        Favourites
      </songs-list>
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
      .map(playlist => playlist.filter(song => song.favourite))
  }

}
