<template>
    <div>
        <Component
            :is="link.url ? 'a' : 'span'"
            v-for="link in links"
            :key="link.id"
            :href="link.url"
            :class="{
                'text-gray-800': ! link.url, 'font-bold text-blue-500': link.active,
            }"
            class="px-1"
            >
            <ul class="inline-flex items-center mt-10">
            <li class="flex items-center rounded justify-center h-full py-1.5 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" v-html="link.label"></li>
            </ul>
        </Component>

    </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
        },
    },
}

</script>
