import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {reactiveDict} from 'meteor/reactive-dict';
import { Names } from '../api/names.js';
import './name.js';
import './manager.html';

Template.body.helpers({
  names() {
    return Names.find({}, { sort: { createdAt: -1 } });
  }
});


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
  owner: Meteor.userId(),
  username: Meteor.user().username,

});

target.firstName.value='';
target.secondName.value='';
target.gender.value= '';
target.Bday.value='';
},
'click .delete-items'(event){
  Names.find({checked:true}).forEach(function(name){
    Names.remove(name._id);
    // console.log(checkedItems);
  });
}

})
