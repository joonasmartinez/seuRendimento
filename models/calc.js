class Calc{

    constructor(inicial, mensal, jurosAnual){

        this._inicial = parseFloat(inicial);
        this._mensal = parseFloat(mensal);
        this._jurosAnual = parseFloat(jurosAnual);
        this._montante = parseFloat(inicial);
        this.rendeu;
        this.porcentagemRendimento;

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
    
    get montante(){
        return this._montante;
    }

    doCalc(){

        let rendeu = (this.montante*((this.jurosAnual/12)/100))-montante
        this.rendeu = rendeu;
        montante += rendeu;
        porcentagemRendimento = 

    }

}