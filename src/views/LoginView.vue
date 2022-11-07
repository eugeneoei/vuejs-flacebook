<script setup lang="ts">
import { ref } from "vue";
import FlbkButton from "../components/ui/FlbkButton.vue";
import FlbkSpinner from "../components/ui/FlbkSpinner.vue";

// export default defineComponent({
//     data() {
//         return {
//             count: 1,
//         };
//     },
// });

const email = ref<string>("");
const password = ref<string>("");
const isLoggingIn = ref<boolean>(false);

const handleLogin = () => {
    isLoggingIn.value = true;
    console.log("hi");
};
</script>

<template>
    <div className="my-12 mx-auto max-w-sm">
        <div className="shadow-2xl bg-slate-100 p-12 rounded-xl">
            <h3 className="text-xl text-center font-bold tracking-wider">
                Login
            </h3>
            <form @submit.prevent="handleLogin">
                <div class="mt-4">
                    <label htmlFor="email" class="block">Email</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="block w-full mt-2 p-2 rounded"
                    />
                </div>
                <div class="mt-4">
                    <label htmlFor="password" class="block">Password</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="block w-full mt-2 p-2 rounded"
                    />
                </div>
                <div class="mt-6">
                    <FlbkSpinner v-if="isLoggingIn" />
                    <FlbkButton v-else>Login</FlbkButton>
                </div>
            </form>
        </div>
    </div>
</template>
