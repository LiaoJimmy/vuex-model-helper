const PREFIX = 'CHANGE_';

const toUpperCaseUnderline = text => text.match(/([A-Z]?[a-z0-9]+)/g).map(item => item.toUpperCase()).join('_');

const mutationGenerator = modalArray =>
  modalArray.reduce((previous, modal) => ({
    ...previous,
    [`${PREFIX}${toUpperCaseUnderline(modal)}`](state, { value }) {
      this.state[modal] = value;
    },
  }), {});

const computedGenerator = modalArray => modalArray.reduce((previous, modal) => ({
  ...previous,
  [modal]: {
    get() {
      return this.$store.state[modal];
    },
    set(value) {
      this[`${PREFIX}${toUpperCaseUnderline(modal)}`]({ value });
    },
  },
}), {});

const methodsGenerator = fieldArray => fieldArray.map(field => `${PREFIX}${toUpperCaseUnderline(field)}`);

module.exports = {
  toUpperCaseUnderline,
  computedGenerator,
  methodsGenerator,
  mutationGenerator,
};
