<template>
    <div>
        <Head>
            <title>{{ blog.title }}</title>
            <meta head-key="description" name="description" :content="blog.content" />
            <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        </Head>
    <div class="py-20 bg-transparent grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <div class="col-span-2">
            <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos">
                        <div>
                            <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                            <p class="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                            <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                        </div>
                    </div>
                </address>
                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"><h2>{{ blog.title }}</h2></h1>
            </header>
        <div>
            <p class="text-gray-400">{{ blog.content }}</p>
        </div>

        <Link preserve-scroll :href="`/blog/${blog.id}/edit`">Edit Post</Link>

        </div>
        <div class="col-span-1"></div>
    </div>
</div>
</template>

<script>
export default {
props: {
    blog: {
    type: Object,
    required: true,
    },
},
};
</script>
