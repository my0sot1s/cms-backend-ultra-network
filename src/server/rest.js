import passport from 'passport'
import uuid from 'node-uuid'
import ejs from 'ejs'
const path = require("path");

const authenMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  } else {
    next();
  }
}

export default (app, controller, cors, middleware) => {
  app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public/index.html'))
    res.render("index.ejs");
  })
  app.get('/graphql', authenMiddleware, (req, res) => {
    res.render("graphql.ejs");
  })
  app.get('/create-blog', authenMiddleware, (req, res) => {
    res.render("blog.ejs");
  })
  app.get('/socket', authenMiddleware, (req, res) => {
    res.render("socket.ejs");
  })
  app.get('/facebook-dev', authenMiddleware, (req, res) => {
    res.render("facebook.ejs");
  })



  app.get('/test', (req, res) => {
    if (req.isAuthenticated())
      res.send("Login");
    else res.send("Chưa login mà");
  })
  app.route("/login")
    .get((req, res) => {
      res.render("login.ejs");
    })
    .post(passport.authenticate('local'
      , {
        failureRedirect: '/login',
        successRedirect: '/'
      }),
    // (req, res) => {
    //   res.redirect('/');
    // }
  );
  app.get("/logout", (req, res, next) => {
    req.logout();
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
    });
  })


  // Note: Load all controllers is a array.
  // router uri: api/{router_name}
  const len = controller.length;
  for (var i = 0; i < len; i++) {
    app.use('/api', cors(middleware.cors), controller[i])
  }
}