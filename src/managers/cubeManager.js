const uniqid=require('uniqid');
const cubes=[];

exports.getAll=()=>cubes.slice();

exports.getOne=(cubeId)=>cubes.find(x=>x.id==cubeId)

exports.create=(cubeData)=>{
    const newCube={
        id:uniqid(),
        createdAs: new Date(),
        ...cubeData,
    }
cubes.push(newCube);
console.log(newCube);
return newCube;

}