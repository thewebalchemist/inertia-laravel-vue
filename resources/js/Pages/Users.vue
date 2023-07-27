<template>
    <div>
    <h1>Users Database</h1>
    <ul>
        <li
        v-for="user in users"
        :key="user.id"
        v-text="user.name"
        >
        </li>
    </ul>
    </div>
</template>

<script setup>
defineProps({
    users: {
        type: Array,
    }
})
</script>
