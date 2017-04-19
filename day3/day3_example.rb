arr = []
(0...10).each  do|i|  
	arr << i * i * i
end

arr = Array.new(10){|i| i * i * i }

puts arr

arr[3..5] = [nil, nil, nil]

p arr


a = {}
b = {}
c = {}

arr_hashes = [a, b, c]



puts arr_hashes


arr[3..5] = arr_hashes

puts arr

newarray = Array.new(20) {|i| i if i.even?}



puts newarray

newarray.delete_if{|x| x % 4 != 0}

puts newarray

puts newarray.find_index {|item| item % 3 == 0}

