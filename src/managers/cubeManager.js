const uniqid=require('uniqid');
const Cube=require('../models/Cube');
const Accessory = require('../models/Accessory');
const cubes=[];

exports.getAll=async(search,from, to)=>{
    let result=await Cube.find().lean();
    console.log(search);
if(search){
    result=result.filter(cube=>cube.name.toLowerCase().includes(search.toLowerCase()))
}
if(from){
    result=result.filter(cube=>cube.difficultyLevel>=Number(from))
}
if(to){
    result=result.filter(cube=>cube.difficultyLevel<=Number(to))
}
return result;

};

exports.getOne=(cubeId)=>Cube.findById(cubeId).populate('accessories');
exports.getOneWithAccessories=(cubeId)=>this.getOne(cubeId).populate('accessories')

exports.create=async (cubeData)=>{
    const cube=new Cube(cubeData);
    await cube.save()
    

return cube;

};

exports.update=(cubeId,cubeData)=>Cube.findByIdAndUpdate(cubeId,cubeData)

exports.delete=(cubeId)=>Cube.findByIdAndDelete(cubeId)

exports.attachAccessory=async(cubeId,accesoryId)=>{
    //await Cube.findByIdAndUpdate(cubeId,{$push:{accesories:accesoryId}})
const cube=await Cube.findById(cubeId);
cube.accessories.push(accesoryId);
return cube.save();

}

