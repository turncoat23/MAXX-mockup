fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=4e4b774e9c312d8f78c80d23cab1482c"
)
    .then((response) => response.json())
    .then((response) => console.log(response.poster_path))
    .catch((err) => console.log(err))


