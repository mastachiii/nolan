import axios from "axios";

// Use TheMovieDatabase API to curate a list of movies w/ images, posters, etc. for dummy shop.

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWIzODUyM2ZiZDcxMDcxZjI1NTVjOTNiZDk0MzUzNSIsIm5iZiI6MTczMTkyODA4Mi4yMzIzMTM0LCJzdWIiOiI2NzM5ZjhiNzI4MWFjOTcyZWE0NGNkMzQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z_xp7EnB0VO0FahNkIlzVsf_0aAYILVhOYktY08Mr9o",
    },
};

// fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error(err));

// Returns an object with title, images, etc as it's property.
async function makeMovieObj(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}`;

    try {
        axios.get(url, options).then((r) => console.log(r.data));
    } catch {
        return null;
    }
}

export default makeMovieObj;
