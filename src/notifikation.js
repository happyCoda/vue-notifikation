let NotifikationComponent = require('./notifikation.vue'),
  Notifikation = {};

Notifikation.install = function (Vue, options) {
  let Component = Vue.extend(NotifikationComponent),
    queue = [];

  Vue.prototype.$show = function (options) {
    let vm = (new Component({
        data: {
          message: options.message,
          style: {
            width: options.width || '100px',
            height: options.height || '50px',
            backgroundColor: options.backgroundColor || 'rgb(113, 111, 115)',
            color: options.color || 'rgb(255, 255, 255)',
            right: options.right || '10px',
            top: `${queue.length > 0 ? (queue.length * 50) + (queue.length * 10) + 10 : 10}px`
          }
        }
      })).$mount(),
      body = document.querySelector('body');

    queue.push(vm);
    setTimeout(() => {
      body.removeChild(vm.$el);
      vm.$destroy();
      vm = null;
      queue.shift();
      queue.forEach((comp) => {
        comp.$data.top = `${parseInt(comp.$data.top, 10) - 60}px`;
      });
    }, options.duration || 3000);

    body.appendChild(vm.$el);
  };
};

export default Notifikation;
