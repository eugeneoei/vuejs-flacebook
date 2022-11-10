<script setup lang="ts">
import { formatCount } from "@/utils/formatter";

const emit = defineEmits(["showPostComments"]);

const props = defineProps({
    content: {
        type: String,
        required: true,
    },
    numberOfPostComments: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <div className="my-4">
        <p>{{ props.content }}</p>
    </div>
    <div className="text-right pb-4 border-b-2 border-solid">
        <button
            className="hover:underline"
            @click="() => emit('showPostComments')"
        >
            {{ formatCount(numberOfPostComments) }} Comment{{
                numberOfPostComments > 1 ? "s" : ""
            }}
        </button>
    </div>
</template>
