var Twitter = require('twitter'),
  express = require('express'),
  config = require('./config.js'),
  app = express(),
  client,
  params;


client = new Twitter({
  consumer_key: config.twitterConfig.consumer_key,
  consumer_secret: config.twitterConfig.consumer_secret,
  access_token_key: config.twitterConfig.access_token_key,
  access_token_secret: config.twitterConfig.access_token_secret
});

params = {
  screen_name: 'findercomau'
};


app.get('/finder-tweets', function (req, res) {
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      res.setHeader('Content-Type', 'application/json');
      res.send(tweets);
    }
  });
})

//app.use('/public', express.static('public'));
//app.use('/finder-tweets', express.static('app/public'));
app.use('/myapp', express.static('app'));
app.use('/node_modules', express.static('node_modules'));

app.listen(8080);
