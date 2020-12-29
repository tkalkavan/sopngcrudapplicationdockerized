import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  //This is mapped port:8000-> 8080
  private baseUrl = 'http://localhost:8000/songs';

  constructor(private http: HttpClient) {
  }

  getSongList(): Observable<any> {
    return this.http.get(this.baseUrl + '/getAllSongs/');
  }


  deleteSong(id: String): Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteSongById/' + id);
  }

  getSong(id: String): Observable<any> {
    return this.http.get(this.baseUrl + '/getSong/' + id);
  }

  updateSong(id: String, song: any): Observable<any> {
    return this.http.put(this.baseUrl + '/updateSong/' + id, song);

  }

  addSong(song: Object): Observable<any> {
    return this.http.post(this.baseUrl + '/createSong/', song);
  }
}
