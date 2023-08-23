<template>
    <section>

        <Head>
            <title>Our Blog</title>
            <meta head-key="description" name="description"
                content="We use an agile approach to test assumptions and connect with the needs of your audience early and often." />
            <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        </Head>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <section class="flex flex-col justify-between space-y-10 lg:p-10 border border-gray-400 rounded-3xl ">
                    <div class="flex flex-row justify-between ">
                        <div class="text-start lg:mb-16 mb-8 max-auto max-w-prose">
                            <h2
                                class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Our mission is to make knowledge and news accessible for everyone.</h2>
                            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to
                                test assumptions and connect with the needs of your audience early and often.</p>
                        </div>
                        <div>
                            <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
                                <Link preserve-scroll href="#" class="flex items-center justify-center w-10 h-10 bg-blue-300/50 rounded-full">
                                    <icons name="facebook" class="h-8" />
                                </Link>
                                <Link preserve-scroll href="#" class="flex items-center justify-center w-10 h-10 bg-blue-300/50 rounded-full">
                                    <icons name="twitter" class="h-8" />
                                </Link>
                                <Link preserve-scroll href="#" class="flex items-center justify-center w-10 h-10 bg-blue-300/50 rounded-full">
                                    <icons name="linkedin" class="h-8" />
                                </Link>
                                <Link preserve-scroll href="#" class="flex items-center justify-center w-10 h-10 bg-red-300/50 rounded-full">
                                    <icons name="youtube" class="h-8" />
                                </Link>
                                <Link preserve-scroll href="#" class="flex items-center justify-center w-10 h-10 bg-red-300/50 rounded-full">
                                    <icons name="instagram" class="h-8" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between">
                        <div>
                            <form>
                                <label for="default-search"
                                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search"
                                        class="block w-full py-3 px-10 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search Mockups, Logos..." required>
                                </div>
                            </form>
                        </div>
                        <!-- Tab Interface -->
                        <div class="sm:hidden">
                            <select id="tabs" v-model="activeTab"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="(category, index) in tabCategories" :key="index">{{ category }}</option>
                            </select>

                        </div>
                        <ul class="hidden text-sm font-medium text-center text-gray-500 sm:flex gap-2 dark:text-gray-400">
                            <li v-for="(category, index) in tabCategories" :key="index" class="">
                                <Link preserve-scroll @click="changeTab(index)"
                                    :class="{ 'bg-gray-100': activeTab === index }" href="#"
                                    class="inline-block w-full border border-gray-500 rounded-full py-3 px-4 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 active focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700">
                                {{ category }}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <div class="py-10">
                    <!-- Blog Posts -->
                        <div class="py-20">
                            <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                                <div v-for="blog in filteredBlogs" :key="blog.id"
                                    class="w-full flex flex-col justify-between shadow dark:bg-gray-900 relative">
                                    <a :href="'/blog/' + blog.id"
                                        class="relative block w-full h-80 rounded-lg overflow-hidden">
                                        <img class="object-cover w-full h-full" src="/images/6.jpg" :alt="blog.title" />
                                        <!-- Category rounded container -->
                                        <div
                                            class="absolute bottom-2 left-2 bg-blue-700/70 text-white px-4 py-2 font-medium rounded-3xl">
                                            {{ blog.category }}
                                        </div>
                                        <!-- Fire emoji and rounded circle -->
                                        <div class="absolute top-0 right-0 mt-2 mr-2">
                                            <div
                                                class="flex items-center justify-center w-12 h-12 bg-orange-300/70 rounded-full">
                                                <icons name="fire" class="h-10 " />
                                            </div>
                                        </div>
                                    </a>
                                    <div class="p-5">
                                        <a :href="'/blog/' + blog.id"
                                            class="text-xl font-bold text-gray-900 dark:text-white">{{ blog.title }}</a>
                                        <p class="mt-2 text-gray-500 dark:text-gray-400">{{ truncatedContent(blog) }}</p>
                                        <Link preserve-scroll :href="'/blog/' + blog.id"
                                            class="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        View Full Post
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <calculator />

                <section class="py-20">
                    <h2 class="capitalize text-4xl text-center text-gray-400">
                        In-depth articles for curious minds
                    </h2>
                    <div class="grid grid-cols-4 gap-10 py-10">
                        <div v-for="(category, index) in categories" :key="index"
                            class="blue-shadow border-2 rounded-lg cursor-pointer border-gray-300 text-white text-center flex flex-col space-y-4 p-5 ">
                            <Link preserve-scroll>
                            <h3 class="text-sm md:text-md tracking-widest">{{ category }}</h3>

                            </Link>
                        </div>
                    </div>
                </section>
                <div class="py-8">
                    <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 ">
                        <div v-for="blog in wealthManagementPosts" :key="blog.id"
                            class="max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a :href="'/blog/' + blog.id">
                                <img class="rounded-t-lg object-cover w-full" src="/images/3.jpg" alt="" />
                            </a>
                            <div class="p-5">
                                <a :href="'/blog/' + blog.id">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                                        blog.title }}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ truncatedContent(blog) }}
                                </p>
                                <a :href="'/blog/' + blog.id"
                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-20">
                    <div class="grid grid-cols-2 gap-5 py-10">
                        <div v-for="blog in investing101Posts" :key="blog.id"
                            class="flex flex-col justify-between shadow md:flex-row md:max-w-xl hover:cursor-pointer">

                            <img class="object-cover w-full rounded-lg h-48 " src="/images/2.jpg" alt="">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <Link :href="'/blog/' + blog.id">
                                <h5
                                    class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline hover:decoration-sky-500">
                                    {{ blog.title }}</h5>
                                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{{
                                    truncatedContent(blog) }}</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <aside aria-label="Related articles" class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-900">
                    <div class="px-4 mx-auto max-w-screen-xl">
                        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            <article v-for="blog in riskManagementPosts" :key="blog.id"
                                class="max-w-xs flex flex-col justify-between">
                                <a :href="'/blog/' + blog.id">
                                    <img src="/images/5.jpg" class="mb-5 rounded-lg" alt="Image 1">
                                </a>
                                <h2
                                    class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white hover:underline hover:decoration-sky-500">
                                    <a href="#">{{ blog.title }}</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">{{ truncatedContent(blog) }}</p>
                                <a :href="'/blog/' + blog.id"
                                    class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 2 minutes
                                </a>
                            </article>
                        </div>
                    </div>
                </aside>
                <section class="bg-white dark:bg-gray-800 rounded-2xl ">
                    <div class="py-16 px-4">
                        <div class="flex flex-row justify-center gap-10 items-center">
                            <div class="items-center">
                                <h2
                                    class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    Sign up for our newsletter</h2>
                                <p class="mx-auto max-w-2xl font-light text-gray-500 sm:text-xl dark:text-gray-400">Stay up
                                    to date with the roadmap progress, announcements and exclusive discounts feel free to
                                    sign up with your email.</p>
                            </div>
                            <div>
                                <form action="#">
                                    <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                        <div class="relative w-full">
                                            <label for="email"
                                                class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                                address</label>
                                            <div
                                                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                    </path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <input
                                                class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Enter your email" type="email" id="email" required="">
                                        </div>
                                        <div>
                                            <button type="submit"
                                                class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                        </div>
                                    </div>
                                    <div
                                        class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                                        We care about the protection of your data. <a href="#"
                                            class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read
                                            our Privacy Policy</a>.</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

    </section>
</template>


<script>
import { Link } from "@inertiajs/inertia-vue3";
import Calculator from "./Calculator.vue";
import Icons from "../../Shared/Icons.vue";

export default {
    props: {
        blogs: {
            type: Array,
            required: true,
        },
    },
    components: {
        Link,
        Calculator,
        Icons,
    },
    data() {
        return {
            activeTab: 0, // Initially show the first category
        };
    },
    computed: {
        categories() {
            const allCategories = [
                ...new Set(this.blogs.map((blog) => blog.category)),
            ];
            return allCategories; // Return only the first 5 categories
        },
        tabCategories() {
            const tabCategories = [
                ...new Set(this.blogs.map((blog) => blog.category)),
            ];
            return tabCategories.slice(0, 5); // Return only the first 5 categories
        },
        filteredBlogs() {
            const selectedCategory = this.categories[this.activeTab];
            if (selectedCategory) {
                // Filter blogs by selected category
                return this.blogs.filter((blog) => blog.category === selectedCategory);
            } else {
                // No category selected, show all blogs
                return this.blogs;
            }
        },
        wealthManagementPosts() {
            // Filter blogs to include only those in the 'Wealth Management' category
            return this.blogs.filter((blog) => blog.category === "Wealth Building");
        },
        investing101Posts() {
            // Filter blogs to include only those in the 'Investing 101' category
            return this.blogs.filter((blog) => blog.category === "Investing 101");
        },
        riskManagementPosts() {
            // Filter blogs to include only those in the 'Investing 101' category
            return this.blogs.filter((blog) => blog.category === "Risk Management");
        },
    },
    methods: {
        changeTab(index) {
            this.activeTab = index;
        },
        truncatedContent(blog) {
            const maxWords = 15; // Adjust the number of words you want to display
            const words = blog.content.split(" ");
            if (words.length > maxWords) {
                return words.slice(0, maxWords).join(" ") + "...";
            }
            return blog.content;
        },
    },
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

.blue-shadow {
    box-shadow: 5px 5px #2463eb;
    transition: ease-in-out 0.5s;
}

.blue-shadow:hover {
    box-shadow: none;
}

.gridService:hover {
    transform: translateY(-3px);
}

.gridService {
    transition: all 0.3s ease-in-out 0s;
}
</style>
