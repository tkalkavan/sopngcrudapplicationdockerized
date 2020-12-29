import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/Song";
import {ActivatedRoute, Router} from "@angular/router";
import {SongService} from "../../service/song-service.service";

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  id: String;
  song: Song;

  constructor(private route: ActivatedRoute, private router: Router,
              private songService: SongService) {
  }

  ngOnInit(): void {
    this.song = new Song();

    this.id = this.route.snapshot.paramMap.get('id');


    this.songService.getSong(this.id)
        .subscribe(data => {
          console.log(data);
          this.song = data;
        }, error => console.log(error));
  }

  getSongList(){
    this.router.navigate(['listOfSongs']);
  }

}
