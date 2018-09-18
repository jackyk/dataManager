import {Template} from  'meteor/templating';

import {Names} from '../api/names.js';
import "./name.html";

Template.nameData.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Names.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Names.remove(this._id);
  },
  'click .DELETE'(){
    Names.remove(this._id);
  },
  // 'click .update'(){
  //
  // },
});
