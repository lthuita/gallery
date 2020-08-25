var config = {}

// Update to have your correct username and password
config.mongoURI = {

    production: 'mongodb+srv://new_user:new_user@lunicluster1.mou1f.mongodb.net/dark?retryWrites=true&w=majority',
    development: 'mongodb+srv://new_user:new_user@lunicluster1.mou1f.mongodb.net/dark-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://new_user:new_user@lunicluster1.mou1f.mongodb.net/dark-test?retryWrites=true&w=majority',

}
module.exports = config;
