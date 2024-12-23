<script setup lang="ts">
import { RouterLink } from "vue-router";
import Shape from "../assets/geometric.svg";
</script>

<template>
    <header class="w-100 pa3 ph5-ns">
        <div class="db dt-ns mw9 center w-100 pb2">
            <div class="db dtc-ns v-mid tl w-50">
                <a
                    href="/"
                    class="flex items-center dib f5 f3-ns fw6 mt0 mb1 link black-70"
                    title="Home"
                >
                    <div class="flex items-center mw2 mr2">
                        <img
                            :src="Shape"
                            class="w-100 black-70"
                            alt="Geometric Pattern"
                        />
                    </div>
                    QC Perks
                </a>
            </div>
            <nav class="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
                <router-link
                    to="/business"
                    class="f6 fw6 link black-70 mr2 mr3-m mr4-l dib dim"
                    >Want To Promote Your Business? Click here.</router-link
                >
            </nav>
        </div>
    </header>
</template>
