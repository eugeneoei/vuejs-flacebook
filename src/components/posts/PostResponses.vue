<script setup lang="ts">
const emit = defineEmits(["showPostComments"]);

const handleLike = () => {
    console.log("like post");
};
</script>

<template>
    <div className="grid grid-cols-2 p-1 gap-2 border-b-2 border-solid">
        <button
            @click="handleLike"
            className="hover:bg-slate-100 p-2 rounded-lg"
        >
            <font-awesome-icon
                icon="fa-regular fa-thumbs-up"
                className="inline-block mr-3"
            />
            Like
        </button>
        <button
            @click="() => emit('showPostComments')"
            className="hover:bg-slate-100 p-2 rounded-lg"
        >
            <font-awesome-icon
                icon="fa-regular fa-comment"
                className="inline-block mr-3"
            />
            Comment
        </button>
    </div>
</template>
