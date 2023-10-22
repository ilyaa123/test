<script setup lang="ts">
import HomeContent from '@/components/Home/Content.vue'
import HomeAside from '@/components/Home/Aside.vue'
import HomeMain from '@/components/Home/Main.vue'
</script>

<template>
    <HomeContent>
        <template #aside>
            <HomeAside />
        </template>
        <HomeMain />
    </HomeContent>
</template>
