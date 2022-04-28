class Calc{

    constructor(inicial, mensal, jurosAnual, periodo){

        this._inicial = parseFloat(inicial);
        this._mensal = parseFloat(mensal);
        this._jurosAnual = parseFloat(jurosAnual);
        this._periodo = parseInt(periodo);
        this._montante = parseFloat(inicial);

    }

    get inicial(){
        return this._inicial;
    }

    get mensal(){
        return this._mensal;
    }

    get jurosAnual(){
        return this._jurosAnual;
    }

    get periodo(){
        return this._periodo;
    }
    
    get montante(){
        return this._montante;
    }

    doCalc(){

        let rendeu = this.montante + (this.montante*(this.jurosAnual/12))
        console.log(rendeu, this.montante, this.jurosAnual)

    }

}