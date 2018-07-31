console.log('Hey. I heard you want a list of Star Trek series...');

fetch('http://stapi.co/api/v1/rest/series/search')
.then(resp => {
  console.log(resp);
  if (resp.ok) return resp.json()
  else throw new Error(resp.status);
})
.then(jsonResp => {
    console.log(jsonResp.series);
})
.catch(err => console.log('Oh noes:', err));

console.log('Shout out to the STAPI at http://stapi.co/');
        