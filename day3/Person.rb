class Person
	attr_reader :name, :lastname, :person_id

	def initialize(name, lastname, id)
		@name = name
		@lastname = lastname
		@person_id = id
	end

	def has_name?(name)
		return @name == name
	end


end

