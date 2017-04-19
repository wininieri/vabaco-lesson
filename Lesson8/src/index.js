
 
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

    
    var helper = require('./helperModule')(firstnameInput, lastnameInput, btnSubmit, container);

    btnSubmit.addEventListener('click', function () {
        if (helper.editingName) {
            helper.editingName.firstname = firstnameInput.value;
            firstnameInput.value = null;

            helper.editingName.lastname = lastnameInput.value;
            lastnameInput.value = null;

            helper.editingName = null;
            btnSubmit.innerText = 'დამატება';
        }
        else {
            names.push({
                firstname: firstnameInput.value,
                lastname: lastnameInput.value
            });

            firstnameInput.value = null;
            lastnameInput.value = null;
        }

        helper.drawRows(names);
    });


    var url1 = 'https://jsonplaceholder.typicode.com/posts';
    helper.httpGetPromise(url1).then(function (result1) {
        console.log(result1);
        helper.addData(result1, names);   
        helper.drawRows(names); 
    })
    helper.drawRows(names);
   
 
   
 
 
   
 
    
   
 
     
 
   
 
 
   
