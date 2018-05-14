<template>
  <div>
    User Name:
    <input
      type="text"
      v-model="userName"
    >
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
    ]),
  },
  methods: {
    ...mapMutations([
      ...methodsGenerator([
        'userName',
      ]),
    ]),
  },
};
</script>
