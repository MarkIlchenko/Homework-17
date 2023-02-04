function generate_table() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tableBody");
    for (let y = 0; y < 10; y++ ) {
        const row = document.createElement("tr");

        for (let x = 0; x < 10; x++ ) {
            const cell = document.createElement("td");
            const cell2 = document.createTextNode((x + y*10) + 1);
            cell.appendChild(cell2);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}