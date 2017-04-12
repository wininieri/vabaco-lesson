(function(){



	var names = [{
		firstname: 'Iona',
		lastname: 'Geladze'
	}, {
		firstname: 'Kakhaber',
		lastname: 'Bazerashvili'
	},{
		firstname: 'Beqa',
		lastname: 'Bumbeishvili'
	},{
		firstname: 'Nini',
		lastname: 'Mumladze'
	}];



	var firstnameInput = document.getElementById('firstname');
	var lastnameInput = document.getElementById('lastname');
	var container = document.getElementById('container');
	var btnSubmit = document.getElementById('btnSubmit');

	drawRows();
 	

 	// btnSubmit.addEventListener


	function drawRows(){
		container.innerHTML = '';
		names.forEach(function (name){

			var tr = document.createElement('tr');

			var td1 = document.createElement('td');
			td1.innerText = name.firstname;

			var td2 = document.createElement('td');
			td2.innerText = name.lastname;

			var button = document.createElement('td');


			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(button);

			var actualBtn = document.createElement('button');
			actualBtn.innerText = 'Delete';
			button.appendChild(actualBtn);
			container.appendChild(tr);

			actualBtn.addEventListener('click', function(){
				names.splice(names.indexOf(name), 1);
				drawRows();
			});

			var editBtn = document.createElement('button')
			editBtn.innerText = ' edit';
			button.appendChild(editBtn);

			editBtn.addEventListener('click', function(){
				editRow(name);
			});
		})
	}

	var editingName;


	function editRow(name)
	{
		firstnameInput.value = name.firstname;
		lastnameInput.value = name.lastname;
		btnSubmit.innerText = 'edit';
		editingName = name;
	}

	btnSubmit.addEventListener('click', function(){
		if(editingName){
			editingName.firstname = firstnameInput.value;
			firstnameInput.value = null;
			editingName.lastname = lastnameInput.value;
			lastnameInput.value = null;
			editingName = null;
			btnSubmit.innerText = 'submit';
			
		}
		else {
			names.push({
				firstname: firstnameInput.value,
				lastname: lastnameInput.value
			});

			firstnameInput.value = null;
			lastnameInput.value = null;

		}
		drawRows();
	});



	// var container = document.getElementById('foo');
	// console.log(container);

	// var table = document.createElement('table');
	// container.appendChild(table);

	// var headerRow = document.createElement('tr');

	// table.appendChild(headerRow);

	// var headerCell = document.createElement('td');
	// headerCell.innerText = 'firstname';
	// headerRow.appendChild(headerCell);

	// var secondHeaderCell = document.createElement('td');
	// secondHeaderCell.innerText = 'lastname'
	// headerRow.appendChild(secondHeaderCell);




	// names.forEach(function (nameObj, index) {
	// 	var row = document.createElement('tr');

	// 	var name = document.createElement('td');
	// 	name.innerText = nameObj.firstname;

	// 	var lastname = document.createElement('td');
	// 	lastname.innerText = nameObj.lastname;

	// 	row.appendChild(name);
	// 	row.appendChild(lastname);

	// 	row.addEventListener('click', function (e) {
	// 		alert(nameObj.firstname + " " +  nameObj.lastname);
			
 //     	});

	// 	table.appendChild(row);



	// })

})();