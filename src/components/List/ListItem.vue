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
    }
})

const subFieldOpen = ref<boolean>(true)
</script>

<template>
    <li class="li">
        <div class="li__actions">
            <button @click="subFieldOpen = !subFieldOpen">
                {{ subFieldOpen ? 'Open' : 'Close' }}
            </button>
            <input
                v-if="typeof props?.checked !== 'undefined'"
                :checked="props.checked"
                @change="emits('changeChecked', !props.checked)"
                class="checkbox"
                type="checkbox"
            />
        </div>
        <div class="li__content">
            <div class="li__content-label">
                {{ props.label }}
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
    padding: 20px 40px;
    gap: 4px;
}
.li__actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}
.li__content {
    width: 100%;
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
