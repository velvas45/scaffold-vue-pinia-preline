<script setup lang="ts">
defineProps<{ msg: string }>();

const { increment } = useStore();
const { count } = storeToRefs(useStore());
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="text-red-500">
    <button type="button" @click="() => increment()">
      count is {{ count }}
    </button>
  </div>
</template>
