# Simple Connect Four Game

A basic implementation in Svelte with TypeScript and Tailwind CSS.

The game is available online at https://connect.bate.dev

You can watch a video of it being written at https://www.youtube.com/watch?v=jqCHDA0xHWI

## Get started locally

Clone and install the dependencies...

```bash
git clone https://github.com/colinbate/connect-four
cd connect-four
npm install
```

...then start the dev server

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the game running. You can then make any edits in component files in `src`, save it, and the app should reload.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

