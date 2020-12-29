import { Component, OnInit } from '@angular/core';
import {Song} from "../../model/Song";
import {Router} from "@angular/router";
import {SongService} from "../../service/song-service.service";

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {


  song: Song = new Song();
  submitted = false;

  constructor(private songService: SongService,
              private router: Router) { }

  ngOnInit() {
  }

  addSong(): void {
    this.submitted = false;
    this.song = new Song();
  }

  save() {
    this.songService.addSong(this.song).subscribe(data => {
          console.log(data)
          this.song = new Song();
          this.getSongList();
        },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  getSongList() {
    this.router.navigate(['/listOfSongs']);
  }
}
