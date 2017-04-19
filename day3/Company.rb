require_relative 'Employee'
class Company
	attr_accessor :persons

	def initialize(persons)
		@persons = persons
	end

	def find_person(name)
		num = 0
		@persons.each {|person| num += 1 if person.has_name?(name)}
		num
	end

	def find_by_salary(salary)
		num = 0
		@persons.each {|person| num += 1 if person.instance_of?(Employee) && person.has_salary?(salary)}
		num
	end

	def sum_salaries_below(amount)
		num = 0
		@persons.each {|person| num += 1 if person.instance_of?(Employee) && person.salary < amount}
		num
	end

end