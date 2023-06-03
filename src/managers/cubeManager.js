const uniqid=require('uniqid');
const cubes=[];

exports.getAll=()=>cubes.slice();

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