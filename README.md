React Kit
---

A example application that watches your React jsx files, compiles them and then bundles them using webpack. The project also uses sass. If you are a `less` user, simply change the Gruntfile.js and add the task that you need.

Pull requests are welcome.

---

#### Running the project
npm install
npm run dev

---
#### Bundled goodies
- Webpack
- React
- SASS
- Grunt tasks to build your react component tree using weback, that also watches for changes to to your components when run using `npm run dev`.
- A basic nodejs server based on expressjs 4 that serves your html pages

----

- All your javascript code goes under `client/js`
- All your css/scss goes under 'client/scss'
- To add new pages, add the component to `client/js/pages` and then include it in the `grunt/webpack.js` - entry name.

---
