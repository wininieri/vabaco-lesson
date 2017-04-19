require 'csv'
require_relative 'Person'
require_relative 'Employee'

class CompanyFiller

	def initialize
		@persons = []
	end
	
	def fill_company(persons_csv, employees_csv)
		CSV.foreach(persons_csv, headers: true) do |row|
			@persons << Person.new(row["Name"], row["Lastname"], row["ID"])
		end

		CSV.foreach(employees_csv, headers: true) do |row|
			@persons << Employee.new(row["Name"], row["Lastname"], row["ID"], row["Salary"], row ["Title"])
		end
	end

	def persons
		@persons
	end
end