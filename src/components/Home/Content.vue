<template>
    <div class="content">
        <aside class="content__aside">
            <slot name="aside" />
        </aside>
        <main class="content__main">
            <slot />
        </main>
    </div>
</template>
<style scoped>
.content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>
