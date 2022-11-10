<script setup lang="ts">
import type { PropType } from "vue";
import type { Comment } from "@/interfaces/post";
import { formatDistance } from "date-fns";
import FlbkSpinnerVue from "@/components/ui/FlbkSpinner.vue";

const emit = defineEmits(["loadMorePostComments"]);

const props = defineProps({
    hasMorePostComments: {
        type: Boolean,
        required: true,
    },
    isLoadingMorePostComments: {
        type: Boolean,
        required: true,
    },
    comments: {
        type: Object as PropType<Comment[]>,
        required: true,
    },
});
</script>

<template>
    <ul className="grid grid-cols-1 gap-4 mt-4">
        <li
            v-for="comment in props.comments"
            :key="comment.id"
            className="flex"
        >
            <img
                :src="comment.user.avatar"
                className="rounded-full flex-none mr-2 w-9 h-9"
                :alt="`${comment.user.firstName} ${comment.user.lastName}`"
            />
            <div className="flex-1 rounded-xl bg-slate-100 px-3 py-2">
                <span className="block font-bold"
                    >{{ comment.user.firstName }}
                    {{ comment.user.lastName }}</span
                >
                <span className="block my-1">{{ comment.content }}</span>
                <span className="block text-xs">
                    {{
                        formatDistance(
                            new Date(comment.createdAt),
                            new Date(),
                            {
                                addSuffix: true,
                            }
                        )
                    }}
                </span>
            </div>
        </li>
        <li className="text-center" v-if="props.hasMorePostComments">
            <FlbkSpinnerVue v-if="isLoadingMorePostComments" />
            <button
                v-else
                className="hover:underline h-7"
                @click="() => emit('loadMorePostComments')"
            >
                View more comments
            </button>
        </li>
        <!-- if not logged in text should be "log in now to comment" -->
        <li className="text-center" v-if="props.comments.length === 0">
            Be the first to comment!
        </li>
    </ul>
</template>
