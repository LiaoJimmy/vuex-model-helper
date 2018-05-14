<template>
  <div>
    <div>
      User Name:
      <input
        type="text"
        v-model="userName"
      >
    </div>
    <div>
      Gender:
      <input
        id="male"
        name="gender"
        type="radio"
        value="male"
        v-model="gender"
      >
      <label for="male">Male</label>
      <input
        id="female"
        name="gender"
        type="radio"
        value="female"
        v-model="gender"
      >
      <label for="female">Female</label>
    </div>
    <div>
      Note:
      <textarea
        v-model="note"
        placeholder="Type some note"
      />
    </div>
    <div>
      Which is your favorite:
      <div>
        <input
          type="checkbox"
          name="language"
          id="c"
          value="c"
          v-model="language"
        >
        <label for="c">C</label>
        <input
          type="checkbox"
          name="language"
          id="cPlusPlus"
          value="cPlusPlus"
          v-model="language"
        >
        <label for="cPlusPlus">C++</label>
        <input
          type="checkbox"
          name="language"
          id="objectiveC"
          value="objectiveC"
          v-model="language"
        >
        <label for="objectiveC">Objective-C</label>
      </div>
    </div>
    <div>
      Your Class:
      <select v-model="userClass">
        <option
          disabled
          value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div>
      State:
      <p>{{ this.$store.state }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import {
  computedGenerator,
  methodsGenerator,
} from 'vuex-model-helper';

export default {
  computed: {
    ...computedGenerator([
      'userName',
      'gender',
      'note',
      'language',
      'userClass',
    ]),
  },
  methods: {
    ...mapMutations([
      ...methodsGenerator([
        'userName',
        'gender',
        'note',
        'language',
        'userClass',
      ]),
    ]),
  },
};
</script>
