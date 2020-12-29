import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddSongComponent} from './component/add-song/add-song.component';
import {SongDetailComponent} from './component/song-detail/song-detail.component';
import {SongListComponent} from './component/song-list/song-list.component';
import {ThumbComponent} from './component/shared/thumb/thumb.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {UpdateSongComponent} from './component/update-song/update-song.component';
import {FormsModule} from "@angular/forms";
import {ModalBasicComponent} from './misc/modal-basic/modal-basic.component';


@NgModule({
    declarations: [
        AppComponent,
        AddSongComponent,
        SongDetailComponent,
        SongListComponent,
        UpdateSongComponent,
        ModalBasicComponent,
        ThumbComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
