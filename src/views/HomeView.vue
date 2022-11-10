<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import PostSkeleton from "@/components/posts/PostSkeleton.vue";
import PostItem from "@/components/posts/PostItem.vue";

const { isLoading, error, data, isFetching } = useQuery(["posts"], async () => {
    try {
        const response = await axios.get("/api/posts/");
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.log(error);
        return error.response.data;
    }
});
</script>

<template>
    <main class="max-w-xl mx-auto">
        <div v-if="isLoading" class="mt-4">
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </div>
        <ul v-else>
            <li v-for="post in data.results" :key="post.id" class="mt-4">
                <PostItem :post="post" />
            </li>
        </ul>
        <div v-if="!isLoading && Boolean(data.next)" class="mt-4">
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </div>
    </main>
</template>
