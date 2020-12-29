package com.spring.songapp.exception;

public class SongException extends RuntimeException {
    public SongException(String errorMessage) {
        super(errorMessage);
    }

    public SongException(String errorMessage, Throwable cause) {
        super(errorMessage, cause);
    }

}
