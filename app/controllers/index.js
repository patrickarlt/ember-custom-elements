import Ember from 'ember';

var MyCustomElement = Object.create(HTMLElement.prototype);

MyCustomElement.attachedCallback = function () {
  var self = this;
  this.addEventListener('click', function () {
    self.dispatchEvent(new CustomEvent('customevent', {
      bubbles: true
    }));
  });
};

document.registerElement('custom-element', {
  prototype: MyCustomElement
});

export default Ember.Controller.extend({
  actions: {
    handleClick: function (e) {
      console.log('click');
    },

    handleCustom: function (e) {
      console.log('custom');
    }
  }
});
