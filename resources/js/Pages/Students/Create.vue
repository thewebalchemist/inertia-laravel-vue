<template>
<section class="bg-gray-50 dark:bg-gray-900 md:m-20">
    <Head title="Teacher Sign Up" />
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Student Signup
            </h1>
            <form @submit.prevent="submit" class="space-y-4 md:space-y-6">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Fullname</label>
                    <input v-model="form.name" type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required>
                    <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-2"  ></div>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input v-model="form.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                    <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-2"  ></div>
                </div>
                <div>
                    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Location</label>
                    <input v-model="form.location" type="name" name="name" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required>
                    <div v-if="form.errors.location" v-text="form.errors.location" class="text-red-500 text-xs mt-2"  ></div>
                </div>
                <div>
                    <label for="subjects_interests" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Subjects Interests</label>
                    <input v-model="form.subjects_interests" type="name" name="name" id="subjects_interests" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required>
                    <div v-if="form.errors.subjects_interests" v-text="form.errors.subjects_interests" class="text-red-500 text-xs mt-2"  ></div>
                </div>
                <div>
                    <label for="availability" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Availability</label>
                    <input v-model="form.availability" type="name" name="name" id="availability" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required>
                    <div v-if="form.errors.availability" v-text="form.errors.availability" class="text-red-500 text-xs mt-2"  ></div>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input v-model="form.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <div v-if="form.errors.password" v-text="form.errors.password" class="text-red-500 text-xs mt-2"  ></div>
                </div>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                </div>
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" :disabled="form.processing">Create an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
            </form>
        </div>
    </div>
</div>
</section>
</template>


<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

defineProps({
    errors: Object
})


let form = useForm({
    name: '',
    email: '',
    location: '',
    subjects_interests: '',
    availability: '',
    password: '',
});

let submit = () => {
    form.post('/students');
}

</script>
