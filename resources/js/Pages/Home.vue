<template>

<div>
    <Head>
        <title>Home</title>
        <meta name="description" content="Home page" head-key="description" />
    </Head>
    <div class="space-y-20 ">
        <Hero />
        <Features />
        <Content />
    </div>

    </div>
</template>

<script setup>
import Hero from '../Shared/Hero.vue';
import Features from '../Shared/Features.vue';
import Content from '../Shared/Content.vue';
</script>
