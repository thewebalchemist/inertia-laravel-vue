<template>
    <div class="bg-gray-900">

    <Head>
        <title>Could Be Anything</title>
        <link href="../../css/app.css" rel="stylesheet">
        <meta name="description" content="Home page" />
    </Head>


    <div>
    <Header />
    <div>
        <slot></slot>
    </div>
    <Footer />
    </div>

</div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
    Header,
    Footer,
    },
    // Add any component logic here if needed
}
</script>
