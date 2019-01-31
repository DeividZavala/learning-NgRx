import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {SongsFavouritesComponent} from "./components/songs-favourites/songs-favourites.component";
import {SongsListenedComponent} from "./components/songs-listened/songs-listened.component";
import {SongsPlaylistComponent} from "./components/songs-playlist/songs-playlist.component";
import {SongsService} from "./components/services/songs.service";
import {SongsListComponent} from "./components/songs-list/songs-list.component";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    SongsService
  ],
  declarations: [
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongsListComponent
  ],
  exports: [
    SongsPlaylistComponent,
    SongsListenedComponent,
    SongsFavouritesComponent
  ]
})
export class SongsModule{}
