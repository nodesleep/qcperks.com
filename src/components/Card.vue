<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    number: Number,
    title: String,
});
</script>
<template>
    <div class="bt bw3 pt4">
        <span class="f2">/ {{ props.number }} /</span>
    </div>
    <h3 class="f3 mb4 pb2 bb ttu">{{ props.title }}</h3>
</template>
