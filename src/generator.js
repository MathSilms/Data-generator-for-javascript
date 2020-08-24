import { cpfGenerator, getRandomArbitrary } from './Functions'
import connection from './database/connection';
import Faker from 'faker'

async function generateAndInsert(){

    const name = Faker.name.findName();
    console.log(name);

    const cpf  = "cpf: "+cpfGenerator()+',';
    console.log(cpf);

    const age = "age: "+getRandomArbitrary(25,89)+',';
    console.log(age);

    const individamento = "individamento: "+getRandomArbitrary(20,70)+',';
    console.log(individamento)

    const poupança = "poupança: "+getRandomArbitrary(10,20)+',';
    console.log(poupança)

    const liquidez = "liquidez: "+getRandomArbitrary(60,80)+',';
    console.log(liquidez) 
    
    const cobertura = "cobertura: "+getRandomArbitrary(30,45)+',';
    console.log(cobertura)  
    
    const riqueza = "riqueza: "+getRandomArbitrary(0.3,0.5)+',';
    console.log(riqueza) 
    
    const score = "score: "+getRandomArbitrary(500,700)+',';
    console.log(score)  
    
    const tempo_serviço = "tempo_serviço: "+getRandomArbitrary(1,15);
    console.log(tempo_serviço)

    connection('inadimplente_user').insert({
        name,
        cpf,
        age,
        individamento,
        poupança,
        liquidez,
        cobertura,
        riqueza,
        score,
        tempo_serviço
    })
}

generateAndInsert()
