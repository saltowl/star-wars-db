import toCamelCase from '../utils/to-camel-case';

export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api';
  _imageUrl = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${this._baseUrl}${url} received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getPersonImage = ({ id }) => `${this._imageUrl}/characters/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this._imageUrl}/planets/${id}.jpg`;

  getStarshipImage = ({ id }) => `${this._imageUrl}/starships/${id}.jpg`;

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starship/${id}/`);
    return this._transformStarship(starship);
  };

  _getId = (url) => url.match(/\/(\d+)\/$/)[1];

  _transformPlanet = (planet) => {
    const { name, population, rotationPeriod, diameter, url } = toCamelCase(planet);
    return {
      id: this._getId(url),
      name,
      population,
      rotationPeriod,
      diameter,
    };
  };

  _transformPerson = (person) => {
    const { url, name, gender, birthYear, eyeColor } = toCamelCase(person);
    return {
      id: this._getId(url),
      name,
      gender,
      birthYear,
      eyeColor,
    };
  };

  _transformStarship = (starship) => {
    const {
      url,
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    } = toCamelCase(starship);
    return {
      id: this._getId(url),
      name,
      model,
      costInCredits,
      manufacturer,
      length,
      crew,
      passengers,
      cargoCapacity,
    };
  };
}
