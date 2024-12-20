// Use TMDB API to curate a list of movies with posters, details, etc. for dummy shop.
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
    const foo = `https://api.themoviedb.org/3/movie/${id}/credits`;

    const obj = {
        id: "",
        title: "",
        poster: "",
        price: "",
        description: "",
        genres: [],
        backdrops: [],
        directors: [],
        actors: [],
    };

    // Two seperate fetches are required since backdrop images are not included in the first fetch.
    await axios.get(urlDetails, options).then((r) => {
        console.log(r);
        obj.id = r.data.id;
        obj.title = r.data.title;
        obj.price = Math.floor(Math.random() * 50);
        obj.poster = "https://image.tmdb.org/t/p/original" + r.data.poster_path;
        obj.description = r.data.overview;

        // Map every genre object and push it to genres array.
        const genres = r.data.genres;

        genres.forEach((g) => obj.genres.push(g.name));
    });

    await axios.get(urlImages, options).then((r) => {
        const backdrops = r.data.backdrops;

        backdrops.forEach((item) => {
            obj.backdrops.push("https://image.tmdb.org/t/p/original" + item.file_path);
        });
    });

    await axios.get(foo, options).then((r) => {
        const actors = r.data.cast.filter((a, b) => b < 3);
        const directors = r.data.crew.filter((a) => a.job === "Director");

        actors.forEach((a) => obj.actors.push(a.name));
        directors.forEach((a) => obj.directors.push(a.name));
    });

    return obj;
}

async function updateApiProducts() {
    let list;
    let response;
    let final = [];

    await axios.get("http://localhost:3001/products").then((r) => (response = r.data));
    await axios.get("http://localhost:3001/list").then((r) => (list = r.data.items));

    console.log(list);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        await makeMovieObj(list[i]).then((r) => final.push(r));
    }
    response.items = final;

    axios.put("http://localhost:3001/products", response);
}

export default updateApiProducts;
