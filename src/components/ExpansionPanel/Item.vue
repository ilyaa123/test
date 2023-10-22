<script setup lang="ts">
import { ref } from 'vue'

interface Props {
    label: string
}

const props = defineProps<Props>()

const isOpen = ref<boolean>(false)

const isSorted = ref<boolean>(true)
</script>
<template>
    <div class="expansion">
        <button class="expansion__button" @click="isOpen = !isOpen">{{ props.label }}</button>
        <button @click="isSorted = !isSorted">{{ isSorted ? 'Перемешать' : 'Сортировать' }}</button>
        <div class="expansion__content" :class="isOpen ? 'open' : 'close'">
            <slot :sorted="isSorted" />
        </div>
    </div>
</template>
<style scoped>
.expansion {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.expansion__button {
    width: 100%;
}
.expansion__content {
    width: 100%;
}
.expansion__content.close {
    height: 0;
    padding: 0;
    overflow: hidden;
}
.expansion__content.open {
    height: max-content;
}
</style>
