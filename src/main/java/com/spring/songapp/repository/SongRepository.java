package com.spring.songapp.repository;

import com.spring.songapp.model.Song;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SongRepository extends MongoRepository<Song, String> {
}
