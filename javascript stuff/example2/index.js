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
 
 
     function httpGetPromise(url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
 
            request.addEventListener('load', function () {
                if (request.status === 200) {
                    var result = JSON.parse(request.responseText);
                    resolve(result);
                }
                else {
                    reject({
                        status: request.status,
                        error: JSON.parse(request.responseText)
                    });
                }
            });
 
            request.open('GET', url);
            request.send();
        });
    }
 
    var url1 = 'https://jsonplaceholder.typicode.com/posts';
    httpGetPromise(url1).then(function (result1) {
        console.log(result1);
        addData(result1);    
    })
 
 
    function addData(result){
        result.forEach(function (obj){
            names.push({firstname: obj.userId, lastname: obj.title})
        });
        drawRows();
    }
})();