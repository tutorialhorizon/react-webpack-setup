React Kit
---

A example application that watches your React jsx files, compiles them and then bundles them using webpack.

This project uses

- Webpack
- React
- Grunt tasks to build and watch react and keep the nodeserver running using nodemon
- Preconfigured settings so that react shows up in your chrome dev tools
- A basic nodejs server based on expressjs 4 that serves your static html pages

---

THIS BRANCH
---
In this branch you find the code that renders a d3 tree as a react component.

To run the project, do the following

```sh
sudo npm install -g grunt-cli
npm install
npm run dev
```

Then open `localhost:3000/index.html` in your browser and have some fun.