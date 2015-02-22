module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'client/stylesheets/',
      src: ['*.scss', '*.css'],
      dest: 'public/assets/stylesheets',
      ext: '.css'
    }]
  }
};
