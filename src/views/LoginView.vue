<script setup lang="ts">
import { Form, ErrorMessage, Field } from "vee-validate";
import { object, string } from "yup";
import FlbkButton from "../components/ui/FlbkButton.vue";
import FlbkSpinner from "../components/ui/FlbkSpinner.vue";

const schema = object({
    email: string().email("Email is valid.").required("Email is required."),
    password: string().required("Password is required."),
});

const onSubmit = (values: Record<string, any>) => {
    console.log(values);
};
</script>

<template>
    <div className="my-12 mx-auto max-w-sm">
        <div className="shadow-2xl bg-slate-100 p-12 rounded-xl">
            <h3 className="text-xl text-center font-bold tracking-wider">
                Login
            </h3>
            <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ isSubmitting }"
            >
                <div class="mt-4">
                    <label htmlFor="email" class="block">Email</label>
                    <Field
                        id="email"
                        type="email"
                        name="email"
                        class="block w-full mt-2 p-2 rounded"
                    />
                    <ErrorMessage
                        name="email"
                        class="mt-2 text-red-600 block"
                    />
                </div>
                <div class="mt-4">
                    <label htmlFor="password" class="block">Password</label>
                    <Field
                        id="password"
                        type="password"
                        name="password"
                        class="block w-full mt-2 p-2 rounded"
                    />
                    <ErrorMessage
                        name="password"
                        class="mt-2 text-red-600 block"
                    />
                </div>
                <div class="mt-6 text-center">
                    <FlbkSpinner v-if="isSubmitting" />
                    <FlbkButton v-else>Login</FlbkButton>
                </div>
            </Form>
        </div>
    </div>
</template>
