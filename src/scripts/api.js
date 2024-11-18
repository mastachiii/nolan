// Use TMDB API to curate a list of movies with posters, details, etc.
import axios from "axios";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWIzODUyM2ZiZDcxMDcxZjI1NTVjOTNiZDk0MzUzNSIsIm5iZiI6MTczMTg1MjcxNC4xOTkzNSwic3ViIjoiNjczOWY4YjcyODFhYzk3MmVhNDRjZDM0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JFf69E7c_f9IaYdEwH9MdIBJP1sVrhuQGBoRMUjzWdQ",
    },
};

async function makeMovieObj(id) {
    const urlDetails = `https://api.themoviedb.org/3/movie/${id}`;
    const urlImages = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=null`;
    const obj = {
        title: "",
        poster: "",
        description: "",
        backdrops: [],
    };

    await axios.get(urlDetails, options).then((r) => {
        obj.title = r.data.title;
        obj.poster = "https://image.tmdb.org/t/p/original" + r.data.poster_path;
        obj.description = r.data.overview;
    });

    await axios.get(urlImages, options).then((r) => {
        const backdrops = r.data.backdrops;

        backdrops.forEach((item) => {
            obj.backdrops.push("https://image.tmdb.org/t/p/original" + item.file_path);
        });
    });

    console.log(obj);
}

export { makeMovieObj };
