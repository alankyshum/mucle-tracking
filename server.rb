require 'sinatra'
require 'json'
require 'awesome_print'
require 'mongo'
require 'mongo_mapper'
# MODELS
require 'model/records'


# GLOBAL VARAIBLES
# ----------------
configFile = File.read('config.json')
config = JSON.parse(configFile)
coll_records = nil

# CONFIGURATION
# -------------

configure do
  client = Mongo::Client.new(config["mongolab"])
  coll_records = client["records"]
  MongoMapper.setup({'production' => {'uri' => config["mongolab"]}}, 'production')
end


# APIS OPENING
# ------------

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/trackingRecord' do
  ap params
  coll_records.insert_one({
    :date => params["date"],
    :time => params["time"],
    :numSets => Integer(params["numSets"]),
    :tool => params["tool"],
    :valueOfType => Integer(params["valueOfType"]),
    :type => params["type"]
  })
  'resonse done'
end
