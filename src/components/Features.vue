<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    title: String,
});
</script>
<template>
    <h3 class="f3 mb4 pb2 bb ttu">{{ props.title }}</h3>
</template>
