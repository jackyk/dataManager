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
'click .update'(){
  var form = document.getElementById('myForm');
  form.firstName.value =this.firstName;
  form.secondName.value =this.secondName;
  form.gender.value =this.gender;
  form.Bday.value =this.Bday;
},

'click .updateItems'(){
  Names.insert(this._id, {$set:{firstName: form.firstName.value}})
}
});
