
class Account
	attr_accessor :balance, :id, :name


	def initialize(balance, id, name)
		@balance = Float(balance)
		@id = Float(id)
		@name = name
	end

	def change_balance(amount, isWidthdrawal)
		if(isWidthdrawal)
			if @balance >= amount
				@balance -= amount
				return true
			end
			return false
		end
		@balance += amount
		return true
	end


	public
	def compare_balance(b)
		return isEquals(b.balance)
	end

	def to_s()
		return "#{@balance} - #{@id} - #{@name}"
	end

	protected
	def isEquals(balance1)
		return @balance == balance1
	end

	

end