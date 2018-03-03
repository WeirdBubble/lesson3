import readline from '@jace1995/readline';

enum Operator {plus, div, minus, multiply};

interface OperatorLabels {
    [key: number]: string;
}

const operatorLabels: OperatorLabels = {
    [Operator.plus]: '+', 
    [Operator.div]: '/', 
    [Operator.minus]: '-', 
    [Operator.multiply]: '*'
};

class Generation {
    private first : number;
    private second : number;
    private task : Operator;

    constructor () {
        this.first = this.randomNumber();
        this.second = this.randomNumber();
        this.task = this.randomOperator();
    } 

    private randomOperator(): Operator {
        return <Operator> Math.round(Math.random()*4);
    }    
    private randomNumber(): number {
        const res=Math.round(Math.random()*20-10);
        return res? res: 10;
    }

    toString() {

        return `${this.first} ${operatorLabels[this.task]} ${this.second} = `;
    }

    calculate() {
        switch(this.task) {
            case Operator.plus: return this.first+this.second;
            case Operator.minus: return this.first-this.second;
            case Operator.div: return this.first/this.second;
            case Operator.multiply: return this.first*this.second;
        }
    }

}


async function main ()
{
   while(true) {
       const operation = new Generation();
       const answer = await readline(operation.toString() + '\n');
       if( +answer != +operation.calculate().toFixed(1))
       {
           console.log('Хватит пить');
           break;
       } else {
           console.log('Еще по одной');
       }
    }
}

main();