require_relative 'Account'
require_relative 'Transfer'
require_relative 'account_csv_reader'

puts "Input the name of csv file"
filename = gets.chomp

reader = CsvReader.new()
reader.read_in_csv_data(filename)


def transfer(reader,amount)
	transfer_id = 0
	reader.accounts.each_with_index  do |account, index| 
		if index.odd?
			if index + 1 <= reader.accounts.length
				transfer = Transfer.new(account, reader.accounts[index + 1], transfer_id)
				transfer.process_transaction(amount)
				puts "transfering from account #{account.name} to #{reader.accounts[index +1].name} with transferID #{transfer.id}"
				transfer_id += 1
			end
		end
	end
end

transfer(reader, 100)


def find_account_forname(name, reader)
	reader.accounts.each {|account| return account.to_s if name == account.name}
	return nil
end

puts find_account_forname(gets.chomp, reader)