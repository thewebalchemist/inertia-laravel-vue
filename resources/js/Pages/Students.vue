<template>
    <div>
    <h1>Students Database</h1>
    <ul>
        <li
        v-for="student in students"
        :key="student.id"
        v-text="student.name"
        >
        </li>
    </ul>
    </div>
</template>

<script>
defineProps({
    students: {
        type: Array,
        required: true
    }
})
</script>
