import {
  toUpperCaseUnderline,
  mutationGenerator,
  computedGenerator,
  methodsGenerator,
} from '../src/index';

describe('vuex-model', () => {
  describe('toUpperCaseUnderline()', () => {
    it('should transform one word to upper case', () => {
      const text = 'apple';

      expect(toUpperCaseUnderline(text)).toBe('APPLE');
    });

    it('should transform muti-word to upper case with underline', () => {
      const text = 'countOfApple';
      const text2 = 'endToEndTestVer2';
      const text3 = 'ver2Player';

      expect(toUpperCaseUnderline(text)).toBe('COUNT_OF_APPLE');
      expect(toUpperCaseUnderline(text2)).toBe('END_TO_END_TEST_VER2');
      expect(toUpperCaseUnderline(text3)).toBe('VER2_PLAYER');
    });
  });

  describe('mutationGenerator()', () => {
    it('should generate mutations object by modal array', () => {
      const modalArray = ['name', 'email', 'password'];

      const mutations = mutationGenerator(modalArray);

      expect(mutations).toHaveProperty('EDIT_NAME');
      expect(mutations).toHaveProperty('EDIT_EMAIL');
      expect(mutations).toHaveProperty('EDIT_PASSWORD');
    });
  });

  describe('computedGenerator()', () => {
    it('should generate computed method by modal array', () => {
      const modalArray = ['name', 'email', 'password'];

      const computed = computedGenerator(modalArray);

      expect(computed).toHaveProperty('email');
      expect(computed.email).toHaveProperty('get');
      expect(computed.email).toHaveProperty('set');
      expect(computed).toHaveProperty('name');
      expect(computed.name).toHaveProperty('get');
      expect(computed.name).toHaveProperty('set');
      expect(computed).toHaveProperty('password');
      expect(computed.password).toHaveProperty('get');
      expect(computed.password).toHaveProperty('set');
    });
  });

  describe('methodsGenerator', () => {
    it('should generate method name with EDIT_ predix', () => {
      const modalArray = ['name', 'email', 'password'];

      const methods = methodsGenerator(modalArray);

      expect(methods[0]).toBe('EDIT_NAME');
      expect(methods[1]).toBe('EDIT_EMAIL');
      expect(methods[2]).toBe('EDIT_PASSWORD');
    });
  });
});
