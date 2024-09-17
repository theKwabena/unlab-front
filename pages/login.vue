<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  email: undefined,
  password: undefined
})

const form = ref()

async function onSubmit (event: FormSubmitEvent<any>) {
  form.value.clear()
  try {
    const response = await $fetch('...')
  } catch (err) {
    if (err.statusCode === 422) {
      form.value.setErrors(err.data.errors.map((err) => ({
        // Map validation errors to { path: string, message: string }
        message: err.message,
        path: err.path,
      })))
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-12 content-center h-screen">
      <div class="col-start-6 col-span-2 space-y-8">
        <div class="space-y-4">
          <p class="text-4xl font-semibold"> Welcome to UITS Unix Lab</p>
          <p class="text-sm"> Enter username and password to continue</p>
        </div>
        <UForm ref="form" :state="state" @submit="onSubmit" class="space-y-4">
          <UFormGroup name="email">
            <UInput v-model="state.email" />
          </UFormGroup>

          <UFormGroup name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>

          <UButton type="submit" block color="red">
            Submit
          </UButton>
        </UForm>
      </div>
    </div>
    <div>
  </div>

</template>

