import {Component, OnInit} from '@angular/core';
import {SongService} from  "../../service/song-service.service";
import {Observable} from "rxjs";
import {Song} from "../../model/Song";
import {Router} from "@angular/router";


@Component({
    selector: 'song-list',
    templateUrl: './song-list.component.html',
    styleUrls: ['./song-list.component.css'],
    providers: [SongService]
})
export class SongListComponent implements OnInit {

    pageTitle = 'Song  List';
    imageWidth = 100;
    imageMargin = 1;
    showImage = true;
    // tslint:disable-next-line:variable-name
    _listFilter = '';
    get listFilter(): string {
        return this._listFilter;
    }

    filteredSongs: Song[] = [];
    songs: Song[] = [];

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredSongs = this.listFilter ? this.doFilter(this.listFilter) : this.songs;
    }

    song: Observable<Song[]>;

    constructor(private songService: SongService, private router: Router) {
        this.listFilter='';
    }

    /*
    *
    * The pipe method is for chaining observable operators,
    *  and the subscribe is for activating the observable and listening for emitted values.
    * */
    ngOnInit(): void {

     this.songService.getSongList().subscribe(
         songs=>{
             this.songs=songs;
             this.filteredSongs=songs;
         }
     );

    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Song List: ' + message;
    }

    doFilter(filterBy: string): Song[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.songs.filter((song: Song) =>
            song.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //CRUD

    getSongList() {
        this.song = this.songService.getSongList();
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    deleteSong(id: string) {

        this.songService.deleteSong(id).subscribe(
            data => {
                console.log(data);
                this.getSongList();
            },
            error => console.log(error));
    }

    updateSong(id:string){
        this.router.navigate(['update',id]);
    }

    songDetails(id: string) {
        this.router.navigate(['song', id]);
    }

}
