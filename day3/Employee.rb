require_relative 'Person'
class Employee < Person
	attr_reader :salary, :position_title


	def initialize(name, lastname, id, salary, title)
		@salary = salary
		@position_title = title
		super(name, lastname, id)
	end


	def has_salary?(salary)
		return @salary == salary
	end
end
