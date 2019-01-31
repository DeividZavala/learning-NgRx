import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {SongsService} from "../services/songs.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: "songs-playlist",
  template:`
    <div class="songs">
      <songs-list
        [list]="playlist$ | async"
      >
        Playlist
      </songs-list>
    </div>
  `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy{

  playlist$: Observable<any[]>;
  subscription: Subscription;
  constructor(
    private store: Store,
    private songsService: SongsService
  ){}
  ngOnInit(){
    this.playlist$ = this.store.select("playlist");
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
