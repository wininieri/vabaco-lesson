require 'csv'
require_relative 'Account'
require_relative 'Transfer'


class CsvReader
	attr_reader :accounts
	def initialize
		@accounts = []
	end
	
	def read_in_csv_data(csv_file_name)
		CSV.foreach(csv_file_name, headers: true) do |row|
			@accounts << Account.new(row["BALANCE"], row["ID"], row["NAME"])
		end
	end

	


end