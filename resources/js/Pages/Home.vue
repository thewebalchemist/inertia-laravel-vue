<template>
    <div>
        <h1>
        Hello World! from Laravel 8 and Vue 3
    </h1>

    <nav>
        <ul>
            <li>
                <Link href="/users">Users</Link>
            </li>
        </ul>
    </nav>
    </div>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
        Link
    }
}
</script>
