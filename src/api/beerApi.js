import axios from "axios";

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  service,

  getBeers() {
    return service.get("/");
  },

  getRandomBeer() {
      return service.get("/random");
  },

  postNewBeer(beer) {
    return service.post("/new", beer);
  },

  getOne(id) {
    return service.get("/" + id);
  },

  search(query) {
      return service.get(`/search?q=${query}`);
  }
};