require 'sinatra'
require 'slim'
require 'json'
require 'awesome_print'
require 'mongo'
# MODELS
config = JSON.parse(File.read('lib/config.json'))
musclePos = JSON.parse(File.read('lib/musclePositions.json'))

# INCLUDE
include Mongo

# GLOBAL VARAIBLES
# ----------------
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

get ('/') {
  Slim::Template.new('views/index.slim', {}).render(Object.new,
    :musclePosFront => musclePos["posFront"],
    :musclePosBack => musclePos["posBack"],
    :muscleSrc => musclePos["img"]
  )
}

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
