class Records
  include MongoMapper:key :Document,
  key :date, Date
  key :time, Time
  key :numSets, Integer
  key :tool, String
  key :valueOfType, Integer
  key :type, String
end
