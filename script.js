function createTable() {
    //Write your code here
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Non-numeric input
    if (isNaN(rn) || isNaN(cn)) {
        return;
    }

    rn = Number(rn);
    cn = Number(cn);

    // 0 or negative values
    if (rn <= 0 || cn <= 0) {
        alert("Please enter positive numbers");
        return;
    }

    let table = document.getElementById("myTable");

    // Remove previous table content
    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();

            cell.innerText = `Row-${i} Column-${j}`;
        }
    }
	
  
}
