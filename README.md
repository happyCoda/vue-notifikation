# vue-notifikation
Vue.js notification plugin

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
      this.$show(options);
    }
  }
}
```

### API
There are 4 methods for calling notifications.

#### $show
Generic method. Can create notifications of any level (error, success or info);

```js
this.$show(options);
```

#### $error
As it's name says, `$error` method creates error level notifications.

```js
this.$error(options);
```

#### $success
This method creates notifications for any good news.

```js
this.$success(options);
```

#### $info
Use `$info` method whenever you need some regular notification.

```js
this.$info(options);
```

#### options
All 4 API methods expects an options object with some configuration data to setup notification.
`level` - sets notification level (e.g.: error). This parameter can be useful with `$show` method only. If didn't specified, `info` level will be set by default.
`selector` - sets selector for DOM container, where your notifications will be rendered.
`message` - notification message to show.
`duration` - time in milliseconds before notification will be dismissed.
`width` - notification width. Default value is 200px.
`height` - notification height. Default value is 50px.
`backgroundColor` - notification background color.
`color` - notification text color.
`right` - notification offset from the right window boundary. Default value is 10px.

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
      this.$success({
        message: `You've just von 1 000 000$!!!`
      });
    }
  }
}
```
