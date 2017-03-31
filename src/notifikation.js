let NotifikationComponent = require('./notifikation.vue'),
  Notifikation = {};

Notifikation.install = function (Vue, options) {
  let Component = Vue.extend(NotifikationComponent),
    queue = [],
    vm;

  Vue.prototype.$show = function (options) {
    let notifikationItem,
      items,
      itemsLen,
      bgColor,
      textColor = 'rgb(255, 255, 255)',
      body = document.querySelector('body');

    if (options.level === 'error') {
      bgColor = 'rgb(214, 38, 36)';
    } else if (options.level === 'success') {
      bgColor = 'rgb(134, 193, 73)';
    } else {
      bgColor = 'rgb(148, 144, 152)';
    }

    if (!vm) {
      let selector = options.selector || '#notifikation';

      if (!document.querySelector(selector)) {
        let el = document.createElement('div');

        el.setAttribute('id', 'notifikation');
        document.querySelector('body').appendChild(el);
      }

      vm = (new Component({
        data: {
          items: []
        }
      })).$mount(selector);
    }
    items = vm.$data.items;
    itemsLen = items.length;

    notifikationItem = {
      message: options.message,
      style: {
        width: options.width || '200px',
        height: options.height || '50px',
        backgroundColor: options.backgroundColor || bgColor,
        color: options.color || textColor,
        right: options.right || '10px',
        top: `${itemsLen > 0 ? (itemsLen * 50) + (itemsLen * 10) + 10 : 10}px`
      }
    };

    items.push(notifikationItem);
    setTimeout(() => {
      items.shift();
      items.forEach((item) => {
        item.style.top = `${parseInt(item.style.top, 10) - 60}px`;
      });
    }, options.duration || 3000);
  };

  Vue.prototype.$info = function (options) {
    this.$show(options);
  };
  Vue.prototype.$error = function (options) {
    this.$show(Object.assign(options, {
      level: 'error'
    }));
  };
  Vue.prototype.$success = function (options) {
    this.$show(Object.assign(options, {
      level: 'success'
    }));
  };
};

export default Notifikation;
