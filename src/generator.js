import faker from 'faker'
import { cpfGenerator, getRandomArbitrary } from './Functions'



  const name = faker.name.findName()
  console.log(name);

  const age = getRandomArbitrary(25,89)+' anos';
  console.log(age);

  const cfp  = cpfGenerator()
  console.log(cfp);


  const individamento = getRandomArbitrary(70,100).toString()+'%';
  console.log(individamento)

  const poupança = getRandomArbitrary(1,10).toString()+'%';
  console.log(poupança)

  const liquidez = getRandomArbitrary(80,100).toString()+'%';
  console.log(liquidez) 
  
  const Cobertura = getRandomArbitrary(2,30).toString()+' dias';
  console.log(Cobertura)  
  
  const Riqueza = getRandomArbitrary(0.1,0.2).toString();
  console.log(Riqueza) 
  
  const Score = getRandomArbitrary(100,450).toString();
  console.log(Score)  
  
  const tempo_serviço = getRandomArbitrary(1,12).toString()+' meses';
  console.log(tempo_serviço)