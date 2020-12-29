
# ****DOCKERIZED Spring Boot + Angular 9 CRUD + MongoDB + Tutorial****

 This is dockerized version CRUD application, here:
     https://github.com/tkalkavan/songcrudapplication 
     
 Docker Compose is a tool for defining and running multi-container Docker applications. \
 We define and configure all the services used in application in single file called as "docker-compose.yml"

 
 ![Alt text](https://i.ibb.co/Cwm62f9/Copy-of-Spring-Boot-Angular-9-CRUD-Mongo-DB-Docker-Tutorial-1.png "Architecture of application")

##**What are going to implement?**
* Create a song
* Update a song
* List of songs
* Delete song
* View song details
* Plus Rating for Song :)

##**Working of Application**
* Once we deployed our application on the server,a view pop-up to add and view students at the web browser. 
* Once clicking add song link, the page redirects to create song via router we can add a song by filling the required details.
* At the main page, details of the existing song fetched from MongoDB and song also contains update and delete link.
* Note that I'm populating image from file system, just for simplicty :)


![Alt text](https://i.ibb.co/6PptTG2/Spring-Boot-Angular-9-CRUD-Mongo-DB-Docker-Tutorial-2-Song.png "Architecture of application")


**Backend endpoints:**

http://localhost:8000/songs/createSong \
http://localhost:8000/songs/updateSong/{id} \
http://localhost:8000/songs/deleteSong/{id} \
http://localhost:8000/songs/getSong/{id} \
http://localhost:8000/songs/getAllSongs

Sample JSON data:
```json

  {
    "id": "5fe491cee71c1c45b8b517d3",
    "title": "Highway to Hell",
    "artist": "AC/DC",
    "image": "./assets/images/acdc.png",
    "album": "Highway to Hell",
    "genre": "Rock, Heavy metal, Hard rock, Blues, Rock and roll, Blues rock, Boogie rock",
    "thumbRating": 5,
    "releaseDate": "2020-04-24"
  }

```
***Docker Commands to run whole application***

```
 docker build -t song-app-container .
 docker-compose up
```
You can always check if your containers working

```json
  docker ps
```

**Screenshot of project**

![Alt text](https://i.ibb.co/cgRgzzW/screenshot.png "Angular side")
