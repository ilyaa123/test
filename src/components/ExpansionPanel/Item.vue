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
        <div class="expansion__head">
            <button class="expansion__button" @click="isOpen = !isOpen">{{ props.label }}</button>
            <button class="expansion__shuffle" @click="isSorted = !isSorted">
                {{ isSorted ? 'Перемешать' : 'Сортировать' }}
            </button>
        </div>

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
    margin-bottom: 20px;
}
.expansion__head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #000000;
}
.expansion__button {
    width: 100%;
    padding: 5px;
    background-color: inherit;
    cursor: pointer;
    border: none;
}
.expansion__shuffle {
    background-color: inherit;
    border: none;
    cursor: pointer;
    padding: 5px;
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
