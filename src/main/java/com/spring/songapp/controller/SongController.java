package com.spring.songapp.controller;


import com.spring.songapp.exception.SongException;
import com.spring.songapp.model.Song;
import com.spring.songapp.service.ISongService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/songs")
@CrossOrigin
public class SongController {

    private final ISongService songService;

    public SongController(ISongService songService) {
        this.songService = songService;
    }


    @GetMapping("/getAllSongs")
    public ResponseEntity<List<Song>> getAllSongs() {

        List<Song> list = songService.getAllSongs();

        return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
    }

    @GetMapping("getSong/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable("id") String id)
            throws SongException {


        Song entity = songService.getSongById(id);

        return new ResponseEntity<Song>(entity, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping("/createSong")
    public ResponseEntity<Song> createSong(@RequestBody Song song)
            throws SongException {


        Song createdSong = songService.createSong(song);


        return new ResponseEntity<Song>(createdSong, new HttpHeaders(), HttpStatus.OK);
    }


    @PutMapping(value = "/updateSong/{id}")
    public ResponseEntity<Song> updateSong(@PathVariable("id") String id,
                                           @RequestBody Song song) {


        Optional<Song> updatedSong = songService.updateSong(id, song);

        return updatedSong.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());

    }


    @DeleteMapping("deleteSongById/{id}")
    public HttpStatus deleteEmployeeById(@PathVariable("id") String id)
            throws SongException {

        songService.deleteSongById(id);

        return HttpStatus.FORBIDDEN;
    }
}
