class UserController{

   constructor(){
       
    this.valorInicial;
    this.valorMensal;
    this.valorJuros;
    this.valorPeriodo;
    this.tableCalc = document.getElementById("tableCalc");
    this.formCalc = document.getElementById("formCalc");
    this.recalc = false;

    this.onCalcSubmit()
    this.onReset();

   }

   onCalcSubmit(){

    this.formCalc.addEventListener("submit", event =>{

      event.preventDefault();

      let btn = this.formCalc.querySelector("[type=submit]")
      
      btn.disabled = true;

      if(this.recalc){

        this.removeTr();

        this.generateInfoTable();

        btn.disabled = false;

        return false;

      }

      this.generateTableCalc();

      btn.disabled = false;

      this.recalc = true;

    })

   }

   onReset(){

    this.formCalc.querySelector("[type=button]").addEventListener("click", event =>{
      window.location.reload()
    });

    

   }

   getValues(){

    this.valorInicial = document.getElementById("valorInicial").value
    this.valorMensal = document.getElementById("valorMensal").value
    this.valorJuros = document.getElementById("valorJuros").value
    this.valorPeriodo = document.getElementById("valorPeriodo").value

   }


   generateTableCalc(){


    let table = document.createElement("table");

    table.className = "table table table-striped table-hover table-bordered";
    table.id = "table-info";

    table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Rendimento do mês</th>
        <th scope="col">Acumulado</th>
        <th scope="col">Porcentagem de aumento</th>
        <th scope="col">Rendimento total</th>
      </tr>
    </thead>
    <tbody id="table-info-tbody">

    </tbody>`

    this.tableCalc.appendChild(table)

    this.generateInfoTable();

   }

   removeTr(){

    
    let tableInfo = document.getElementById("table-info-tbody").querySelectorAll("tr");
    for(let a=0; a< tableInfo.length;a++){
      tableInfo[a].remove();
    }

   }

   generateInfoTable(){

    this.getValues();

    let table = document.getElementById("table-info-tbody");

    let calc = new Calc(this.valorInicial, this.valorMensal, this.valorJuros);

    for(let a=0; a < this.valorPeriodo; a++){

        let tr = document.createElement("tr");

        tr.innerHTML = `
                <tr >
                <th scope="row" >${a+1}</th>
                <td>R$ ${calc.rendeu.toFixed(2).replace(".",",")}</td>
                <td>R$ ${calc.montante.toFixed(2).replace(".",",")}</td>
                <td>${calc.porcentagemRendimento.toFixed(2).replace(".",",")}%</td>
                <td>R$ ${calc._totalRendimento.toFixed(2).replace(".",",")}</td>
                </tr>`;

                calc.doCalc();

                table.appendChild(tr);

    }

   }

}