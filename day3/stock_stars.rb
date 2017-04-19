require_relative 'Company'
require_relative "company_filler"


filler = CompanyFiller.new


filler.fill_company("persons.csv", "employees.csv")

company = Company.new(filler.persons)


puts "find employee names"

forname = gets.chomp

puts company.find_person(forname)

forsalary = gets.chomp


puts company.find_by_salary(forsalary)

below = gets.chomp

puts company.sum_salaries_below(below)