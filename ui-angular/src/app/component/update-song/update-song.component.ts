import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SongService} from "../../service/song-service.service";
import {Song} from "../../model/Song";

@Component({
    selector: 'app-update-song',
    templateUrl: './update-song.component.html',
    styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {

    id: String;
    song: Song;

    constructor(private route: ActivatedRoute, private router: Router,
                private songService: SongService) {
    }

    ngOnInit(): void {

        this.song = new Song();
        this.id = this.route.snapshot.params['id'];

        this.songService.getSong(this.id)
            .subscribe(data => {
                this.song = data;
            }, error => console.log(error));
    }

    updateSong() {

        this.songService.updateSong(this.id, this.song)
            .subscribe(data => {

                this.song = new Song();
                this.getSongList();
            }, error => console.log(error));
    }

    onSubmit() {
        this.updateSong();
    }

    getSongList() {
        this.router.navigate(['/listOfSongs']);
    }

}
