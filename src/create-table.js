export function addTable(header=[], data) {
    var myTableDiv = document.getElementById("show-table");
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.classList.add("w3-table-all");
    table.classList.add("w3-margin");

    table.border = '1'
    table.appendChild(tableBody);

    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tr.classList.add("w3-purple");
    tableBody.appendChild(tr);
    for (let head of header) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(head));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (let item of data) {
        var tr = document.createElement('TR');
        for (let key in item) {
            debugger
            if(header.includes(key)){
                var td = document.createElement('TD')
                td.appendChild(document.createTextNode(item[key]));
                tr.appendChild(td)
            }
        }
        tableBody.appendChild(tr);
    }  
    myTableDiv.textContent = '';
    myTableDiv.appendChild(table)
}