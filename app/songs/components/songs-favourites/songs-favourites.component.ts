import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable} from "rxjs";
import {SongsService} from "../services/songs.service";


@Component({
  selector: "songs-favourites",
  template: `
    <div class="songs">
      <songs-list
        [list]="favourites$ | async"
        (toggle)="onToggle($event)"
      >
        Favourites
      </songs-list>
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit{

  favourites$: Observable<any[]>;
  constructor(
    private store: Store,
    private songsService: SongsService
  ){}

  ngOnInit() {
    this.favourites$ = this.store.select("playlist")
      .filter(Boolean)
      .map(playlist => playlist.filter(song => song.favourite))
  }

  onToggle(event){
    this.songsService.toggle(event)
  }

}
