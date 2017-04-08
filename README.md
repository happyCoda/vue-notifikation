# vue-notifikation
[![npm](https://img.shields.io/npm/v/vue-notifikation.svg?style=flat-square)](https://www.npmjs.com/package/vue-notifikation) [![Vue](https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square)](https://vuejs.org/)

## Installation
Library can be installed via downloading a git repo:

```shell
git clone https://github.com/happyCoda/vue-notifikation.git
```

An `npm` package also available:

```shell
$ npm install vue-notifikation
```

### Getting started
To start using `vue-notifikation`, you need to do two things. First, write some html:

```html
<div id="notifikation"></div>
```
You can use any `id`, or even `class`. This is not necessary, but if you won't do this, plugin will have to go to the DOM and create this html for you. Second thing to do is plugin installation:

```js
// Somewhere in your main js file
import VueNotifikation from 'vue-notifikation';
// Then install the plugin to Vue
Vue.use(VueNotifikation);
```

### Usage
Using `vue-notifikation` is pretty straight forward. Just call one of API methods provided.

```js
// After you've install the plugin, you can use it in any component
export default {
  name: 'SupaDupaComponent',
  data() {
    //...
  },
  methods: {
    someVeryUsefullMethod() {
      // That's it!
      this.$notifikation.show(options);
    }
  }
}
```

### API
There are 4 methods for calling notifications and one for dismiss them.

#### show
Generic method. Can create notifications of any level (error, success or info);

```js
this.$notifikation.show(options);
```

#### error
As it's name says, `error` method creates error level notifications.

```js
this.$notifikation.error(options);
```

#### success
This method creates notifications for any good news.

```js
this.$notifikation.success(options);
```

#### info
Use `info` method whenever you need some regular notification.

```js
this.$notifikation.info(options);
```

#### dismiss
To close notifikation bubble call `dismiss` method. Method accepts single parameter – notifikationId. This parameter is optional, and if omitted, all notifications will be dismissed.

```js
this.$notifikation.dismiss(notifikationId);
```

#### options
All 4 API methods expects an options object with some configuration data to setup notification.

| Name | Type | Default | Description |
|---|---|---|---|
| `level` | `String` | `info` |  Sets notification level (e.g.: error). This parameter can be useful with `$show` method only. |
| `selector` | `String` | '#notifikation' | Sets selector for DOM container, where your notifications will be rendered. |
| `message` | `String` | 'Notified!' | Notification message to show. |
| `duration` | `Number` | `3000` |  Time in milliseconds before notification will be dismissed. |
| `width` | `Number` | `200` |  Notification width. |
| `height` | `Number` | `50` |  Notification height. |
| `backgroundColor` | `String` | `undefined` |  Notification background color. |
| `color` | `String` | `undefined` |  Notification text color. |
| `right` | `Number` | `10` |  Notification offset from the right window boundary. |

### Examples
Let's create notification for some successful event.

```js
export default {
  name: 'AnotherOneGreatestComponent',
  data() {
    //...
  },
  methods: {
    veryImportantMethod() {
      // That's it!
      this.$notifikation.success({
        message: `You've just von 1 000 000$!!!`
      });
    }
  }
}
```

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2017, happyCoda
