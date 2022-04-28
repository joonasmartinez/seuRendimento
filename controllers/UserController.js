class UserController{

   constructor(){
       
    this.valorInicial;
    this.valorMensal;
    this.valorJuros;
    this.valorPeriodo;
    this.tableCalc = document.getElementById("tableCalc");


   }

   getValues(){

    this.valorInicial = document.getElementById("valorInicial").value
    this.valorMensal = document.getElementById("valorMensal").value
    this.valorJuros = document.getElementById("valorJuros").value
    this.valorPeriodo = document.getElementById("valorPeriodo").value

   }

   generateTableCalc(){

    let table = document.createElement("table");

    table.className = "table table table-striped table-hover";
    table.id = "table-info";

    table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Rendimento</th>
        <th scope="col">Acumulado</th>
        <th scope="col">Porcentagem de rendimento</th>
      </tr>
    </thead>
    <tbody id="table-info-tbody">

    </tbody>`

    this.tableCalc.appendChild(table)

    this.generateInfoTable();

   }

   generateInfoTable(){

    this.getValues();

    let table = document.getElementById("table-info-tbody");

    let calc = new Calc(this.valorInicial, this.valorMensal, this.valorJuros);

    for(let a=0; a < 12; a++){

        let tr = document.createElement("tr");

        tr.innerHTML = `
                <tr >
                <th scope="row" >${a+1}</th>
                <td>${a}</td>
                <td>${a}</td>
                <td>${0}</td>
                </tr>`;

                table.appendChild(tr);

    }

   }

}