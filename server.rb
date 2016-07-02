require 'sinatra'
require 'json'
require 'awesome_print'
require 'mongo'
# MODELS

# INCLUDE
include Mongo

# GLOBAL VARAIBLES
# ----------------
configFile = File.read('config.json')
config = JSON.parse(configFile)
records = nil

# CONFIGURATION
# -------------

configure do
  # linking mongo database
  client = Mongo::Client.new(config["mongolab"])
  records = client["records"]
end


# APIS OPENING
# ------------

get '/' do
  File.read(File.join('public', 'index.html'))
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
