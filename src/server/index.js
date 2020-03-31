const express = require('express');
const os = require('os');
const fetch = require('node-fetch');
const app = express();
var woodlotCustomLogger = require('woodlot').customLogger;


// config for logging
var woodlot = new woodlotCustomLogger({
    streams: ['./logs/custom.log'],
    stdout: false,
    format: {
        type: 'json',
        options: {
            spacing: 4,
            separator: '\n'
        }
    }
});
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

//API endpoint for searching repos and logging
  app.get('/api/searchrepo/:sId', (req, res) => {

    console.log(req.params.sId) 
    woodlot.info('Search term: ' + req.params.sId + ' accessed');
    const apiUrl = `https://api.github.com/search/repositories?q=${req.params.sId}&sort=stars&order=desc`;
    console.log(apiUrl) 
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

       //console.log(data)
       woodlot.info('response for search term:' + req.params.sId + '   sent');
       res.send(data);

    })

    
  });

  //API endpoint for detail   of particular repo  and logging
  app.get('/api/getrepo/:repoId', (req, res) => {

    console.log(req.params.repoId) 
    woodlot.info('repo id : ' + req.params.repoId + ' accessed');
    
    const apiUrl = `https://api.github.com/repositories/${req.params.repoId}`;
    console.log(apiUrl) 
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

       //console.log(data)
       woodlot.info('response for repo id :' + req.params.repoId + '  sent');
       res.send(data);

    })

    
  });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
