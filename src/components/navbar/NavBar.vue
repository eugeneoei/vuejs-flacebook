<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
    <nav
        className="bg-white shadow-xl sticky top-0 px-8 py-4 flex items-center z-10"
    >
        <img
            src="@/assets/logo.png"
            alt="flacebook-logo"
            className="inline-block w-10"
        />
    </nav>
    <div class="pb-4">
        <RouterView />
    </div>
</template>
