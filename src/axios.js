import axios from 'axios';

// base url to make requests to the movies API
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

/*  Example:
    instance.get('/foo-bar');
    will be
    https://api.themoviedb.org/3/foo-bar

*/

export default instance;


/*

  you can have only one export default in a file, but multiple exports
  without default, the we have to distructure the variable and use it as it is,
  without changing the name of the variable in the other file

*/
