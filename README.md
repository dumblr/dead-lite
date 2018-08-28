# _dead-lite_

## What is _dead-lite_?

_Dead_ is a blogging/tumblog/content manufacturing device built using [dat](https://datproject.org/) and running on [beaker browser](https://beakerbrowser.com/). Have you heard of a blog before? Then you get it.

The key difference, though, is that by running on the dat protocol, _dead-lite_ enables each individual to create their own instance of _dead-lite_ and to publish their own content on their own computer and share to other people. This means the data lives on your computer and doesn't _require_ any server space.

## Use _dead-lite_

1. Go to [dead-lite.hashbase.io](dat://dead-lite.hashbase.io) in beaker browser
2. Click on the `...` menu and select "make an editable copy"
3. 
4. Change your theme using the template.css file in the root of the repository. Add anything you want in there to change the site.

## Development Setup

1.  Clone the repo.
2.  Install dependencies

```bash
yarn install
```

3.  Start the development server

```bash
yarn start
```

4.  Create a new Dat site in your Beaker Browser library.
5.  Add your Dat url to config.js
6.  Replace the contents of `dat.json` with your new `dat.json`
7.  Run a build in a separate window

```bash
yarn run build
```

8.  Add the _contents_ from your `/build` folder to your new site's library. The output should look something like this:

![example](./example.png)

9.  You should be able to navigate to your localhost address now, and still pull posts/data from your dat site.
