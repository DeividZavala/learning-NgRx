import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable} from "rxjs";

@Component({
  selector: "songs-listened",
  template: `
    <div class="songs">
      <songs-list
        [list]="listened$ | async"
      >
        Played
      </songs-list>
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
