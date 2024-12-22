<script setup lang="ts">
const date = new Date();
const year = date.getFullYear();
</script>

<template>
    <footer class="cf w-100 ph3 ph5-ns center">
        <div class="db dt-ns mw9 center w-100">
            <div class="fl">
                <p class="f6 db lh-solid">&copy; {{ year }} info@qcperks.com</p>
            </div>
        </div>
    </footer>
</template>
