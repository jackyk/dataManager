import {Template} from  'meteor/templating';

import {Names} from '../api/names.js';
import "./name.html";
// var checkedItems = [];
// var checkCount =0;

Template.nameData.events({
  'click .toggle-checked'(event) {
    Names.update(this._id, {$set: {checked: event.target.checked}});
  },
  'click .delete'() {
    Names.remove(this._id);
  },
'click .update'(event){
  // var id = event.target.id;
  // var select = Names.findOne({"_id":id});
  var form = document.getElementById('myForm');

  form.id.value =this._id;
  form.firstName.value =this.firstName;
  form.secondName.value =this.secondName;
  form.gender.value =this.gender;
  form.Bday.value =this.Bday;
},

});
