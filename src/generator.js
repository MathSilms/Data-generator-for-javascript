import { cpfGenerator, getRandomArbitrary } from './Functions'
import connection from './database/connection';
import Faker from 'faker';

async function generateAndInsert(){

    const name = Faker.name.findName();
    

    const cpf  = cpfGenerator()+',';
    

    const age = getRandomArbitrary(25,89)+',';
    

    const individamento = getRandomArbitrary(20,70)+',';
    

    const poupança = getRandomArbitrary(10,20)+',';
   

    const liquidez = getRandomArbitrary(60,80)+',';
     
    
    const cobertura =getRandomArbitrary(30,45)+',';
    
    
    const riqueza = getRandomArbitrary(0.3,0.5)+',';
    
    
    const score = getRandomArbitrary(500,700)+',';
     
    
    const tempo_serviço = getRandomArbitrary(1,15);
    

    const {result} = await connection('inadimplente_user').insert({
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

    console.log(result)
}

generateAndInsert()
