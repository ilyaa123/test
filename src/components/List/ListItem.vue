<script setup lang="ts">
import { ref } from 'vue'

interface Emits {
    (event: 'changeChecked', value: boolean): void
}

const emits = defineEmits<Emits>()

const props = defineProps({
    label: {
        required: true,
        type: String
    },
    checked: {
        required: false,
        type: Boolean,
        default: undefined
    },
    isCheckedOnce: {
        required: false,
        type: Boolean,
        default: undefined
    }
})

const subFieldOpen = ref<boolean>(true)
</script>

<template>
    <li class="li">
        <div class="li__actions">
            <button class="li__actions-button" @click="subFieldOpen = !subFieldOpen">
                {{ subFieldOpen ? '↓' : '→' }}
            </button>
        </div>
        <div class="li__content">
            <div class="li__content-label">
                <input
                    v-if="typeof props?.checked !== 'undefined'"
                    :id="props.label"
                    :class="{ 'checkbox-once': !!isCheckedOnce }"
                    :checked="props.checked"
                    class="checkbox"
                    type="checkbox"
                    @change="emits('changeChecked', !props.checked)"
                />
                <label :for="props.label">
                    {{ props.label }}
                </label>
            </div>
            <div class="li__subfields" :class="subFieldOpen ? 'open' : 'close'">
                <slot name="subfields" />
            </div>
        </div>
    </li>
</template>
<style scoped>
.li {
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 5px;
    gap: 4px;
    border: 1px solid #000000;
}
.li__actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

.li__actions-button {
    cursor: pointer;
    background-color: inherit;
    border: none;
    width: 40px;
    height: 40px;
    font-size: 18px;
}
.li__content {
    width: 100%;
    padding-top: 8px;
}

.li__content-label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
}

.li__content-label > .checkbox {
    position: absolute;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
    opacity: 0;
}

.checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
}

.checkbox + label::before {
    content: '';
    position: absolute;
    z-index: 1;
    opacity: 1;
    left: -4px;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 4px;
    cursor: pointer;
}

.checkbox:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.checkbox:checked + label::after {
    display: none;
}
.checkbox-once + label::after {
    content: '';
    position: absolute;
    left: 1px;
    z-index: 1;
    opacity: 1;
    width: 10px;
    height: 10px;
    background-color: #0b76ef;
    border-radius: 50%;
}

.li__subfields {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.close {
    height: 0;
    padding: 0;
    overflow: hidden;
}
.open {
    height: auto;
}
</style>
