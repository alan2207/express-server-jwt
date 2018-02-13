const Authentication = require('./controllers/authentication');
const passport = require('passport');
require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send('Express Server with JWT Authentication');
  });

  app.get('/user', requireAuth, function(req, res) {
    res.send({ user: req.user.email.split('@')[0] });
  });

  app.post('/signin', requireSignIn, Authentication.signin);

  app.post('/signup', Authentication.signup);

};
