<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Feature from "../components/Features.vue";
</script>

<template>
    <Navbar />
    <article class="cf w-100 pa3 ph5-ns center">
        <div class="db dt-ns mw9-l center w-100">
            <header class="fl w-100 w-60-l center">
                <h1 class="f-headline-l f1 lh-title lh-solid-l">
                    Boost sales during slow hours
                </h1>
            </header>
            <section class="fl w-100">
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Feature title="Partnership" />
                    <p class="f6 lh-copy measure">
                        We want to partner with you. Our vision is to help local
                        businesses increase foot traffic during their slower
                        periods by featuring exclusive promotions to our
                        subscriber base of local customers via email.
                    </p>
                </div>
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Feature title="Features" />
                    <p class="f6 lh-copy measure">
                        You will receive 4 promotional opportunities per month
                        (once per week). You can choose your promotions to
                        feature and we will handle the promotion delivery to our
                        subscriber base. It can be as simple as sending us your
                        branding, your promotion, and we'll do the heavy
                        lifting.
                    </p>
                </div>
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Feature title="Flexibility" />
                    <p class="f6 lh-copy measure">
                        Our services are aimed at improving foot traffic to
                        local Quad City businesses on their slower days, but
                        we'll work with any business who just wants to promote
                        their deals.
                    </p>
                </div>
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Feature title="Contact" />
                    <p class="f6 lh-copy measure">
                        This is an amazing opportunity to increase your profits
                        and grow with other Quad City businesses. If you're
                        interested in getting started, contact
                        <span class="b">partnerships@qcperks.com</span> and
                        you'll be up and running in no time.
                    </p>
                </div>
            </section>
        </div>
    </article>
    <Footer />
</template>
