import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Observable} from "rxjs";
import {SongsService} from "../services/songs.service";

@Component({
  selector: "songs-listened",
  template: `
    <div class="songs">
      <songs-list
        [list]="listened$ | async"
        (toggle)="onToggle($event)" 
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
    private songsService: SongsService
  ){}

  ngOnInit() {
    this.listened$ = this.store.select("playlist")
      .filter(Boolean)
      .map(playlist => playlist.filter(song => song.listened))
  }

  onToggle(event){
    this.songsService.toggle(event)
  }

}
