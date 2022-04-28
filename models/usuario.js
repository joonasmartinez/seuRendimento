class Calc{

    constructor(inicial, mensal, jurosAnual, periodo){

        this._inicial = inicial;
        this._mensal = mensal;
        this._jurosAnual = jurosAnual;
        this._periodo = periodo;
        this._montante;

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



    }

}