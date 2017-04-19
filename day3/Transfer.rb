require_relative 'Account'

class Transfer

	attr_accessor :account_a, :account_b, :id, :amount

	def initialize(a, b, id)
		@account_a = a
		@account_b = b
		@id = id

	end

	public
	def process_transaction(amount)
		@amount = amount
		make_transaction(amount)
	end


	private
	def make_transaction(amount)
		success = @account_a.change_balance(amount, true)
		if(success)
			@account_b.change_balance(amount, false)
		end
	end


end
