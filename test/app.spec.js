import Vue from 'vue';
import VueNotifikation from '../src/index';

Vue.use(VueNotifikation);

describe('VueNotifikation', () => {
  const vm = new Vue();

  it('has install method', () => {
    expect(typeof VueNotifikation.install).toBe('function');
  });

  describe('Vue instance', () => {
    it ('has notifikation prop installed', () => {
      expect(typeof vm.$notifikation).toBe('object');
    });

    it('has vue-notifikation methods access', () => {
      expect(typeof vm.$notifikation.show).toBe('function');
      expect(typeof vm.$notifikation.info).toBe('function');
      expect(typeof vm.$notifikation.error).toBe('function');
      expect(typeof vm.$notifikation.success).toBe('function');
      expect(typeof vm.$notifikation.dismiss).toBe('function');
    });
  });

  describe('Notifikation methods', () => {

    beforeEach(() => {
      spyOn(vm.$notifikation, 'show');
      vm.$notifikation.info({message: 'info'});
      vm.$notifikation.error({message: 'error'});
      vm.$notifikation.success({message: 'success'});
    });

    it('call $show method internally', () => {
      expect(vm.$notifikation.show).toHaveBeenCalledTimes(3);
    });
  });
});
