require 'sinatra'
require 'slim'
require 'json'
require 'awesome_print'
# require 'mongo'

# INCLUDE
# include Mongo

# GLOBAL VARAIBLES
# ----------------
records = nil

# CONFIGURATION
# -------------
configure do
  # linking mongo database
  # client = Mongo::Client.new(ENV["mongolab_db"])
  # records = client["records"]
end

# INITIALISE
# ----------
system('gulp build') # wait to finish
spawn('gulp watch') # run at bg

# APIS OPENING
# ------------
get '/' do
  Slim::Template.new('views/index.slim', {}).render()
end

post '/trackingRecord' do
  ap params
  # :timezone => params["timezone"]
  newRecord = {
    :date => Date.parse(params["date"]),
    :time => Time.utc(2016, "jul", 3, 20, 12, 1),
    # :time => params["time"],
    :numSets => Integer(params["numSets"]),
    :tool => params["tool"],
    :valueOfType => Integer(params["valueOfType"]),
    :type => params["type"]
  }
  insertedRecord = records.insert_one(newRecord)
  if insertedRecord.successful?
    {:res => insertedRecord.cursor_id}.to_json
  else
    {:res => "Failed Insertion"}.to_json
  end
end
