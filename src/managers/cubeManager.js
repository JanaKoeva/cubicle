const cubes=[];

exports.getAll=()=>cubes.slice();

exports.create=(cubeData)=>{
    const newCube={
        id:cubes.length+1,
        createdAs: new Date(),
        ...cubeData,
    }
cubes.push(newCube);
return newCube;

}