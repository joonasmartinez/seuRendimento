class UserController{

   constructor(valorInicial, valorMensal, valorJuros, valorPeriodo, tableCalc){
       
    this.valorInicial = document.getElementById(valorInicial)
    this.valorMensal = document.getElementById(valorMensal)
    this.valorJuros = document.getElementById(valorJuros)
    this.valorPeriodo = document.getElementById(valorPeriodo)
    this.tableCalc = document.getElementById(tableCalc)


   }

   generateTableCalc(){

    let table = document.createElement("table");

    table.className = "table table table-striped table-hover";

    table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Rendimento</th>
        <th scope="col">Acumulado</th>
        <th scope="col">Porcentagem de rendimento</th>
      </tr>
    </thead>`

    this.tableCalc.appendChild(table)

    let tr = this.generateInfoTable();

    table.createTBody().appendChild(tr);

   }

   generateInfoTable(mes, rendimento, acumulado, porcentagem){

    let tr = document.createElement("tr")

    tr.innerHTML = `
    <tr >
      <th scope="row" >${mes}</th>
      <td>${rendimento}</td>
      <td>${acumulado}</td>
      <td>${porcentagem}</td>
    </tr>`
    console.log(tr)
  return tr;
   }

   calc(){
       
   }

}