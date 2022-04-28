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

    this.generateInfoTable(table);

   }

   generateInfoTable(table){

    let tr = document.createElement("tr");

    this.getValues();

    let calc = new Calc(this.valorInicial, this.valorMensal, this.valorJuros);

    for(let a=0; a<= this.valorPeriodo.value; a++){


        tr.innerHTML = `
                <tr >
                <th scope="row" >${a+1}</th>
                <td>${calc.rendeu}</td>
                <td>${calc.montante}</td>
                <td>${porcentagem}</td>
                </tr>`;



    }


    table.createTBody().appendChild(tr);

    console.log(tr);

    return tr;
   }

}