<script lang="ts">
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
}
</script>

<script setup lang="ts">
import type { PropType } from "vue";
import { formatDistance } from "date-fns";

const props = defineProps({
    createdAt: {
        type: String,
        required: true,
    },
    user: {
        type: Object as PropType<User>,
        required: true,
    },
});
</script>

<template>
    <div className="flex">
        <div className="flex-none">
            <img
                :src="props.user.avatar"
                className="rounded-full inline-block mr-2 w-12"
            />
        </div>
        <div className="flex-1">
            <span className="block font-bold"
                >{{ props.user.firstName }} {{ props.user.lastName }}</span
            >
            <span className="block">
                {{
                    formatDistance(new Date(props.createdAt), new Date(), {
                        addSuffix: true,
                    })
                }}
            </span>
        </div>
        <!-- if user is logged in, and post belongs to user, show actions -->
    </div>
</template>
