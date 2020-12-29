package com.spring.songapp.service.impl;

import com.spring.songapp.exception.SongException;
import com.spring.songapp.model.Song;
import com.spring.songapp.repository.SongRepository;
import com.spring.songapp.service.ISongService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SongServiceImpl implements ISongService {

    private final SongRepository songRepository;

    public SongServiceImpl(SongRepository songRepository) {
        this.songRepository = songRepository;
    }


    public Song createSong(Song song) {

        Calendar calendar = Calendar.getInstance();
        Date now = calendar.getTime();

        song.setReleaseDate(now);

        return songRepository.save(song);

    }

    public Optional<Song> updateSong(String id, Song song) {


      return songRepository.findById(id).map(s -> {

            s.setTitle(song.getTitle());
            s.setAlbum(song.getAlbum());
            s.setGenre(song.getGenre());
            s.setArtist(song.getArtist());
            s.setThumbRating(song.getThumbRating());
            s.setImage(song.getImage());
            s.setReleaseDate(song.getReleaseDate());

          return songRepository.save(s);
        });
    }

    public Song getSongById(String id) {

        Optional<Song> song = songRepository.findById(id);

        if (song.isPresent())
            return song.get();
        else
            throw new SongException("song " + id + " not found!");
    }

    public void deleteSongById(String id) {

        Optional<Song> song = songRepository.findById(id);

        if (song.isPresent())
            songRepository.deleteById(id);
        else
            throw new SongException("No song found for given id :" + id);
    }


    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

}
