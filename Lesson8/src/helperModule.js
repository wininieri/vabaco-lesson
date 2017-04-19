module.exports = function(firstnameInput, lastnameInput, btnSubmit, container) {
    var exporting = {
        drawRows: drawRows,
        addData: addData,
        httpGetPromise: httpGetPromise,
        editingName: null
    };


    function editRow(name) {
        firstnameInput.value = name.firstname;
        lastnameInput.value = name.lastname;
        btnSubmit.innerText = 'edit';
        exporting.editingName = name;
    }

    function drawRows(names) {
        container.innerHTML = '';
        names.forEach(function(name) {

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

            actualBtn.addEventListener('click', function() {
                names.splice(names.indexOf(name), 1);
                drawRows(names);
            });

            var editBtn = document.createElement('button')
            editBtn.innerText = ' edit';
            button.appendChild(editBtn);

            editBtn.addEventListener('click', function() {
                editRow(name);
                drawRows(names);
            });
        })
    }

    function addData(result, names) {
        result.forEach(function(obj) {
            names.push({ firstname: obj.userId, lastname: obj.title })
        });
    }

    return exporting;
}

function httpGetPromise(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();

        request.addEventListener('load', function() {
            if (request.status === 200) {
                var result = JSON.parse(request.responseText);
                resolve(result);
            } else {
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

