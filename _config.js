var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://lthuita:Lumathu1983.@cluster0.ysvco.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://lthuita:Lumathu1983.@cluster0.ysvco.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://lthuita:Lumathu1983.@cluster0.ysvco.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
