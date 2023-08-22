<template>
    <div class="grid grid-cols-4 gap-10 py-10 ">
        <div class="col-span-1"></div>
        <div class="col-span-2">
            <form @submit.prevent="submit">
            <div class="space-y-10">
            <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input v-model="form.title" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your title" required="">
            </div>
            <div class="sm:col-span-2">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select v-model="form.category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                    <option value="" disabled>Select a category</option>
                    <option value="Investing 101">Investing 101</option>
                    <option value="Wealth Building">Wealth Building</option>
                    <option value="Market Insights">Market Insights</option>
                    <option value="Ethical Investing">Ethical Investing</option>
                    <option value="Retirement Planning">Retirement Planning</option>
                    <option value="Risk Management">Risk Management</option>
                    <option value="Financial Consulting">Financial Consulting</option>
                    <option value="Alternative Investments">Alternative Investments</option>
                    <option value="Tax Strategies">Tax Strategies</option>
                    <option value="Regulatory Compliance">Regulatory Compliance</option>
                </select>
            </div>

            <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                <textarea v-model="form.content" id="description" rows="15" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your content here"></textarea>
            </div>
            <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" type="submit">Submit</button>
            </div>
            </form>
        </div>
    <div class="col-span-1"></div>
</div>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

defineProps({
    errors: Object
})

let form = useForm({
    title: '',
    content: '',
    category: '',
});


let submit = () => {
    form.post('/blog');
}

</script>
