import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <songs-playlist></songs-playlist>
      <songs-favourites></songs-favourites>
      <songs-listened></songs-listened>
    </div>
  `
})
export class AppComponent {



}
