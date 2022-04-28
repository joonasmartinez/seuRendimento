class Calc{

    constructor(inicial, mensal, jurosAnual){

        this._inicial = parseFloat(inicial);
        this._mensal = parseFloat(mensal);
        this._jurosAnual = parseFloat(jurosAnual);
        this._montante = parseFloat(inicial);
        this._rendeu=0;
        this._porcentagemRendimento=0;
        this._totalRendimento=0;

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

    get rendeu(){
        return this._rendeu;
    }

    get porcentagemRendimento(){
        return this._porcentagemRendimento;
    }

    set montante(value){
        this._montante = value;
    }

    set porcentagemRendimento(value){
        this._porcentagemRendimento = value;
    }

    doCalc(){

        let rendeu = (this.montante*((this.jurosAnual/12)/100))
        this._rendeu = rendeu;
        this.montante = (this.montante+this.rendeu) + this.mensal;
        this.porcentagemRendimento = ((this.montante/this.inicial)-1)*100;
        this._totalRendimento += rendeu;

    }

}