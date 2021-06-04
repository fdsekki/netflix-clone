import React from 'react';
import './App.css';
import MoviesRow from './MoviesRow';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      
      <Banner />

      <div className="app">
        <MoviesRow title="Netflix Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
        <MoviesRow title="Trending Now" fetchUrl={requests.fetchTrending} />
        <MoviesRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MoviesRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <MoviesRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <MoviesRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <MoviesRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
