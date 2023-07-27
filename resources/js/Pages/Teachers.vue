<template>
    <div>
    <h1>Teachers Database</h1>
    <ul>
        <li
        v-for="teacher in teachers"
        :key="teacher.id"
        v-text="teacher.name"
        >
        </li>
    </ul>
    </div>
</template>

<script>
defineProps({
    teachers: {
        type: Array,
        required: true
    }
})
</script>
