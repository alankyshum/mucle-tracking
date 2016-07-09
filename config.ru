# README:
# run this with: bundle exec rackup

# ----------------------
# ENVIRONMENT VARIABLES
# ----------------------
ENV["mongolab_db"] = "mongodb://admin:admin123@ds021884.mlab.com:21884/muscletracking"


# ----------------------
# FOR HEROKU DEPLOYMENT
# ----------------------
require './server'
run Sinatra::Application
