<script setup lang="ts">
interface Emits {
    (event: 'changeChecked', value: boolean): void
}

const emits = defineEmits<Emits>()

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: false,
        default: undefined
    }
})
</script>

<template>
    <div class="subfield">
        <div class="subfield__content">
            <input
                v-if="typeof props?.checked !== 'undefined'"
                :checked="props.checked"
                @change="emits('changeChecked', !props.checked)"
                class="checkbox"
                type="checkbox"
            />
            {{ props.title }}
        </div>
        <div v-if="$slots.actions" class="subfield__actions">
            <slot name="actions" />
        </div>
    </div>
</template>
<style scoped>
.subfield {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.subfield__content {
    width: 100%;
}
.subfield__actions {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
