module.exports.items= ['item1','item2'];
const person={
    name : '',
}
const ChangeName= (new_name) =>{
    person.name=new_name;
}

module.exports= ChangeName;
module.exports.singlePerson=person;
