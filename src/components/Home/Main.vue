<script setup lang="ts">
import { computed } from 'vue'

import ExpansionPanels from '../ExpansionPanel/index.vue'
import ExpansionPanel from '../ExpansionPanel/Item.vue'
import ExpansionContent from '../ExpansionPanel/Content.vue'

import { useListStore } from '@/stores/list'

const listStore = useListStore()

const list = computed(() => listStore.list)
</script>
<template>
    <ExpansionPanels>
        <template v-for="listItem in list">
            <ExpansionPanel
                v-show="listItem.children.filter((item) => item.checked).length > 0"
                :label="listItem.title"
            >
                <template #default="{ sorted }">
                    <ExpansionContent :items="listItem.children" :sorted="sorted" />
                </template>
            </ExpansionPanel>
        </template>
    </ExpansionPanels>
</template>
