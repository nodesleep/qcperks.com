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
            <!-- <div class="flex items-center fr">
                <div class="h1 w1 mr2 br-100 bg-black-70"></div>
                <div class="h1 w1 mr2 br-100 bg-black-70"></div>
                <div class="h1 w1 br-100 bg-black-70"></div>
            </div> -->
        </div>
    </footer>
</template>
