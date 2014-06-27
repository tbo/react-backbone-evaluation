# React Example 

## Development workflow

After cloning a git repo, run:

    % npm install

to install all needed dependencies and then:

    % npm run start

to start a development server.

Now you can start edit the source code — on changes, server will be reloaded and
client code bundle will be rebuilt.

## Going "production"

To build an optimized bundle of client code run:

    % npm run build

which will produce `assets/bundle.js` build, then:

    % npm run start-prod

to start server in "production" mode (no source code watching and serving
optimized bundle to browser).
