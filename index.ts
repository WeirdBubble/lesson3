import prompt from '@jace1995/prompt';

enum operator {'+','-','/', '*'};

class Generation{
    private first : number;
    private second : number;
    private task : operator;

    constructor ()
    {
        this.first=this.randomNumber();
        this.second=this.randomNumber();
        this.task=this.randomOperator();
    } 

    private randomOperator(): operator
    {
        return <operator> Math.round(Math.random()*4);
    }    
    private randomNumber(): number
    {
        const res=Math.round(Math.random()*20-10);
        return res? res: 10;
    }

    toString()
    {
        return `${this.first} ${operator[this.task]} ${this.second} = `;
    }

    calculate()
    {
        switch(this.task)
        {
            case operator["+"]: return this.first+this.second;
            case operator["-"]: return this.first-this.second;
            case operator["/"]: return this.first/this.second;
            case operator["*"]: return this.first*this.second;
        }
    }

}


async function main ()
{
   while(true)
   {
       const operation = new Generation();
       const answer = await prompt(operation.toString() + '\n');
       if(+answer != +operation.calculate().toFixed(1))
       {
           console.log('Хватит пить');
           break;
       } else 
       {
           console.log('Еще по одной');
       }
    }
}

main();