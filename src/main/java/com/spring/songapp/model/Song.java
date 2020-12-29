package com.spring.songapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "songs")
@Builder
@Getter
@Setter
@AllArgsConstructor
public class Song {

    @Id
    public String id;

    @Field(name = "title")
    public String title;

    @Field(name = "artist")
    public String artist;

    @Field(name = "image")
    public String image;

    @Field(name = "album")
    public String album;

    @Field(name = "genre")
    public String genre;

    @Field(name = "thumbRating")
    public Integer thumbRating;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Field(name = "releaseDate")
    public Date releaseDate;

    @Override
    public String toString() {
        return "Song{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", image='" + image + '\'' +
                ", album='" + album + '\'' +
                ", genre='" + genre + '\'' +
                ", thumbRating='" + thumbRating + '\'' +
                ", artist='" + artist + '\'' +
                ", releaseDate=" + releaseDate +
                '}';
    }
}
