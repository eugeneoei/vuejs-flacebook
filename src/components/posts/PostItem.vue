<script setup lang="ts">
import type { PropType, Ref } from "vue";
import { ref } from "vue";
import type { Post } from "@/interfaces/post";
import PostLayout from "@/components/posts/PostLayout.vue";
import PostHeader from "@/components/posts/PostHeader.vue";
import PostBody from "@/components/posts/PostBody.vue";
import PostResponses from "@/components/posts/PostResponses.vue";
import PostComments from "@/components/posts/PostComments.vue";

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true,
    },
});

const showPostComments: Ref<boolean> = ref(false);
const isLoadingMorePostComments: Ref<boolean> = ref(false);

const handleShowPostComments = () => {
    showPostComments.value = true;
};

const handleLoadMorePostComments = () => {
    isLoadingMorePostComments.value = true;
};
</script>

<template>
    <PostLayout>
        <PostHeader :createdAt="props.post.createdAt" :user="props.post.user" />
        <PostBody
            :content="props.post.content"
            :numberOfPostComments="props.post.comments.count"
            @showPostComments="handleShowPostComments"
        />
        <PostResponses @showPostComments="handleShowPostComments" />
        <PostComments
            v-if="showPostComments"
            :comments="props.post.comments.results"
            :hasMorePostComments="Boolean(props.post.comments.next)"
            :isLoadingMorePostComments="isLoadingMorePostComments"
            @loadMorePostComments="handleLoadMorePostComments"
        />
    </PostLayout>
</template>
