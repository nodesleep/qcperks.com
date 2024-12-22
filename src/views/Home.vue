<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import Signup from "../components/Signup.vue";
</script>

<template>
    <Navbar />
    <article class="cf w-100 mb3 pa3 ph5-ns center">
        <div class="db dt-ns mw9-l center w-100">
            <div class="flex-l w-100 items-center">
                <header class="fl w-60-l w-100-m w-100-s mb3 mb4-l">
                    <h1 class="f-headline-l f-subheadline lh-title lh-solid-l">
                        Receive weekly emails packed with local Quad Cities
                        promotions.
                    </h1>
                </header>
                <div class="fl w-100 w-40-l mb3 mb4-l">
                    <Signup />
                </div>
            </div>
            <section class="fl w-100">
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Card :number="1" title="connect" />
                    <p class="f6 lh-copy measure">
                        Businesses begin by joining QC Perks and sharing their
                        quiet-day promotions with us. This includes special
                        deals, discounts, or exclusive offers designed to bring
                        customers through their doors. Meanwhile, Quad Cities
                        residents subscribe to the weekly email digest to
                        receive updates, bridging the gap between businesses
                        looking for visibility and locals eager to discover
                        value.
                    </p>
                </div>
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Card :number="2" title="curate" />
                    <p class="f6 lh-copy measure">
                        We carefully curate every deal to ensure it aligns with
                        the interests of our audience. Businesses can focus on
                        their craft while we handle the details: creating
                        thoughtful, targeted promotions that resonate with the
                        community. Each offer is more than a discount—it’s a
                        chance to make meaningful connections.
                    </p>
                </div>
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Card :number="3" title="deliver" />
                    <p class="f6 lh-copy measure">
                        Exclusive promotions are delivered directly to residents
                        via email. For locals, it’s as simple as opening their
                        inbox to explore what’s new, what’s local, and what’s
                        worth their attention. Each email is a curated
                        experience, inviting residents to engage with the
                        businesses that make the Quad Cities unique.
                    </p>
                </div>
                <div class="fl w-100 w-100-m w-25-l pr3-m pr4-l">
                    <Card :number="4" title="thrive" />
                    <p class="f6 lh-copy measure">
                        Every redeemed deal strengthens the rhythm of the local
                        economy. Businesses gain visibility, locals rediscover
                        the joy of supporting what’s nearby, and the Quad Cities
                        thrive as a connected and vibrant community. With QC
                        Perks, every interaction is an opportunity to grow
                        together.
                    </p>
                </div>
            </section>
        </div>
    </article>
    <Footer />
</template>
