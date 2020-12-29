import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SongDetailComponent} from "./component/song-detail/song-detail.component";
import {SongListComponent} from "./component/song-list/song-list.component";
import {AddSongComponent} from "./component/add-song/add-song.component";
import {UpdateSongComponent} from "./component/update-song/update-song.component";


const routes: Routes = [
  {path: '', redirectTo: 'listOfSongs', pathMatch: 'full'},
  {path: 'listOfSongs', component: SongListComponent},
  {path: 'update/:id', component: UpdateSongComponent},
  {path: 'song/:id', component: SongDetailComponent},
  {path: 'add', component: AddSongComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
