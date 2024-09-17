<template>
  <div>
    <UContainer class="mt-10 ">
      <UHorizontalNavigation :links="links" class="px-10"/>
      <UCard class="my-10 min-h-[80vh] bg-[#0f172a] ring-0">
        <ClientOnly>
          <UTabs :items="items">
            <template #default="{item, selected}">
              <span class="truncate" :class="[selected && 'text-primary-500']">{{item.label}} </span>
            </template>
            <template #item="{item}">
              <LabTerminal/>
            </template>
          </UTabs>
        </ClientOnly>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup lang="ts">

const items = [{
  label: 'Tab1',
  icon: 'i-heroicons-information-circle',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  icon: 'i-heroicons-eye-dropper',
  content: 'Finally, this is the content for Tab3'
}]


const links = [
  [
    {
      label: "UITS",
    }
  ],
  [
    {
      label: 'Logout',

    }
  ]
]
</script>
<style scoped>
body{
  background-color: #0f172a;
}
</style>
