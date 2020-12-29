package com.spring.songapp.service;

import com.spring.songapp.model.Song;

import java.util.List;
import java.util.Optional;

public interface ISongService {
    Song createSong(Song song);

    Optional<Song> updateSong(String id, Song song);

    Song getSongById(String id);

    void deleteSongById(String id);

    List<Song> getAllSongs();
}
