<script setup lang="ts">
import { computed } from 'vue'

import shuffle from '../../utils/shuffle'

interface Props {
    items: {
        checked: boolean
        color: string
        count: number
    }[]
    sorted: boolean
}

const props = defineProps<Props>()

const renderedItems = computed(() => {
    return props.items
        .filter((item) => item.checked)
        .map((item) => {
            return Array.from(Array(item.count).keys()).map(() => item.color)
        })
})

const shuffledItems = computed(() => {
    return [shuffle<string[]>(renderedItems.value.flat())]
})

const sortedItems = computed(() => {
    return props.sorted ? renderedItems.value : shuffledItems.value
})
</script>
<template>
    <div class="content">
        <div class="content__item" v-for="(item, index) in sortedItems" :key="index">
            <div
                v-for="(color, i) in item"
                :key="color + i"
                class="item"
                :style="`background-color: ${color}`"
            />
        </div>
    </div>
</template>
<style scoped>
.content {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}
.content__item {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
}
.item {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
}
</style>
