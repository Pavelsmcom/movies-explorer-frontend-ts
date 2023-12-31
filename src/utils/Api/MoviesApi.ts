interface IMoviesApi {
  baseUrl: string;
}

class MoviesApi {
  private _baseUrl: string;

  constructor(optionsConnection: IMoviesApi) {
    this._baseUrl = optionsConnection.baseUrl;
  }

  _isCorrectServerResponse(res: Response, message: string) {
    if (!res.ok) {
      throw new Error(`${message}:${res.status}`);
    }
  }

  // Получаем массив фильмов от сервера
  async getInitialMovies() {
    const res = await fetch(this._baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    this._isCorrectServerResponse(res, "getInitialMovies");
    const data = await res.json();
    return data;
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});
