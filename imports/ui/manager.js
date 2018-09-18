// import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {reactiveDict} from 'meteor/reactive-dict';
import { Names } from '../api/names.js';
import './name.js';
import './manager.html';

// adding delete
Template.body.onCreated(function bodyonCreated(){
  this.state= new ReactiveDict();
})

Template.body.helpers({
  names(){
    // const instance = Template.instance();
    // if (instance.state.get('DELETE')){
      // return Names.find({checked: {clear()}}, {sort:{createdAt:-1}});
      // return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });

    // }
    return Names.find({});
  }
})


Template.body.events({
  'submit .myForm': function(event){
    event.preventDefault();

    const target = event.target;
    const firstName= target.firstName.value;
    const secondName= target.secondName.value;
    const gender = target.gender.value;
    const Bday = target.Bday.value;

Names.insert({
  firstName,
  secondName,
  gender,
  Bday,
  createdAt: new Date(),

});

target.firstName.value='';
target.secondName.value='';
target.gender.value= '';
target.Bday.value='';
},
// Delete
// 'change.DELETE input'(event,instance){
//   instance.state.set(delete, event.target.checked);
// }

})
