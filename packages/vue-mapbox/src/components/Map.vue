<script setup lang="ts">
    import { MapEvents } from '../Events';
    import mapbox, { MapboxOptions } from 'mapbox-gl';

    const props = defineProps<{
        options?: MapboxOptions;
    }>();

    const emit = defineEmits<MapEvents>();
</script>

<template>
    <div ref="map"></div>
    <slot />
</template>
