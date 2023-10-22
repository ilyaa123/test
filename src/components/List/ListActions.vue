<script setup lang="ts">
interface Props {
    count: number
    color: string
}

interface Emits {
    (event: 'changeCount', value: number): void
    (event: 'changeColor', value: string): void
}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()
</script>

<template>
    <div class="actions">
        <input
            :value="props.count"
            @change="
                (event) => emits('changeCount', Number((event.target as HTMLInputElement).value))
            "
            type="number"
        />
        <input
            :value="props.color"
            @change="(event) => emits('changeColor', (event.target as HTMLInputElement).value)"
            type="color"
        />
    </div>
</template>
<style scoped>
.actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>
