var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://lthuita:Lumathu1983.@lunicluster1.mou1f.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://lthuita:Lumathu1983.@lunicluster1.mou1f.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://lthuita:Lumathu1983.@lunicluster1.mou1f.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
