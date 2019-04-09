module.exports = {
    getFeatures() {
        let ejsOptions = {delimiter: '?'};
        app.engine('ejs', (path, data, cb) => {
          ejs.renderFile(path, data, ejsOptions, cb);
        });
    }
}