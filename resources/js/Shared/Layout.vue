<template>
    <div>

    <Head>
        <title>Could Be Anything</title>
        <meta name="description" content="Home page" />
    </Head>


    <div>
    <Header />
    <div>
        <h1>
            This is loads from the Layout.vue
        </h1>
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
