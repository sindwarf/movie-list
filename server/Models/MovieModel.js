const db = require('../Database')


   /*
 let movieData = [ {
  title : TestTitle1,
  year :  TestYear1,
  runtime : TestRuntime1,
  metascore : TestMetascore1,
  imdbRating : TestIMDBRating1,
  isWatched : TestIsWatched1
 },
{
  title : TestTitle2,
  year :  TestYear2,
  runtime : TestRuntime2,
  metascore : TestMetascore2,
  imdbRating : TestIMDBRating2,
  isWatched : TestIsWatched2
 },
 {
  title : TestTitle3,
  year :  TestYear3,
  runtime : TestRuntime3,
  metascore : TestMetascore3,
  imdbRating : TestIMDBRating3,
  isWatched : TestIsWatched3
 }];
 */


exports.get = (callback) => {
  //callback(null, 'You got info from models');
  db.query('SELECT * FROM movies', callback);
 }

exports.post = (params, callback) => {
  //callback(null, `You sent to model ${movie}`);
  //console.log(params);
  let q = `INSERT INTO movies (title, isWatched) VALUES (?, ?)`;
  db.query(q, params, callback);
}

exports.put = (params, callback) => {
let q = 'UPDATE movies SET isWatched = ? where title like ?';
db.query(q, params, callback);
}

// let queryStr = 'insert into messages(text, username_id, roomname) \
// values (?, (select id from usernames where text = ? limit 1), ?)';
// console.log('parameters', params);
// db.query(queryStr, params, (err, results, fields) => {