<!-- <template>
    <div>
    <h1>Edit News</h1>
    <form @submit.prevent="submit">
        <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="form.title">
        <div v-if="errors.title" class="error">{{ errors.title[0] }}</div>
        </div>
        <div>
        <label for="body">Body:</label>
        <textarea id="content" v-model="form.content"></textarea>
        <div v-if="errors.content" class="error">{{ errors.content[0] }}</div>
        </div>
        <div>
        <button type="submit">Update</button>
        <router-link :to="'/blog/' + blog.id">Cancel</router-link>
        </div>
    </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { usePage, router } from '@inertiajs/inertia-vue3';

export default {
    props: {
    blog: Object,
    },
    setup(props) {
    const { data } = usePage();
    const form = ref({
        title: props.blog.title,
        content: props.blog.content,
    });

    const errors = ref({});

    const submit = async () => {
        try {
        const response = await router.post(`/blog/${props.blog.id}`, form.value);
        if (response.ok) {
            // Redirect or perform actions after successful update
            router.visit(response.location);
        } else {
            errors.value = response.errors || {};
        }
        } catch (error) {
        console.error(error);
        }
    };

    return {
        form,
        errors,
        submit,
        blog: props.blog,
    };
    },
};
</script> -->
