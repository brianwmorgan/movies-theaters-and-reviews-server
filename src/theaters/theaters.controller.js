const theatersService = require("./theaters.service");

async function list(req, res, next) {
  try {
    const theaters = await theatersService.listTheaters();
    for (let theater of theaters) {
      const movies = await theatersService.listMoviesAtEachTheater(
        theater.theater_id
      );
      theater["movies"] = movies;
    }
    res.json({ data: theaters });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
};
