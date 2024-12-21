<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const status = ref("");
const error = ref();

function validateForm() {
    if (!email.value || !email.value.includes("@")) {
        error.value = "Please enter a valid email address.";
        return false;
    }
    return true;
}

function handleSubmit(event: any) {
    if (!validateForm()) {
        event.preventDefault();
    } else {
        status.value = "Thank you for subscribing!";
        error.value = null;
    }
}
</script>

<template>
    <div class="mw6 center pa4 ba br3">
        <h3 class="f3 f2-m f2-l fw6 mb2">Join the Mailing List</h3>
        <p class="f6 black-70 mb4">
            Subscribe to get Quad City business promotions delivered straight to
            your inbox each week.
        </p>
        <form
            action="https://qcperks.us10.list-manage.com/subscribe/post?u=2322d189ee913937ae33937ba&amp;id=6d2d614f59&amp;f_id=009a2de1f0"
            method="post"
            target="_blank"
            @submit="handleSubmit"
            class="flex flex-column"
        >
            <label for="mce-EMAIL" class="f6 mb2">Email Address</label>
            <input
                type="email"
                id="mce-EMAIL"
                name="EMAIL"
                placeholder="you@example.com"
                required
                class="input-reset ba b--black-20 pa3 mb3 br2 w-100"
                v-model="email"
            />
            <button
                type="submit"
                class="f6 link dim br2 ph3 pv3 mb2 dib white bg-black w-100"
            >
                Subscribe
            </button>
        </form>
        <p v-if="status" class="green f6 mt2 tc">{{ status }}</p>
        <p v-if="error" class="red f6 mt2 tc">{{ error }}</p>
    </div>
</template>
