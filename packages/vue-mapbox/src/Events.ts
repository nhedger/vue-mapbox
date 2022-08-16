import {
    MapBoxZoomEvent,
    MapDataEvent,
    MapMouseEvent,
    MapTouchEvent,
    MapWheelEvent,
} from 'mapbox-gl';

export interface MapEvents {
    (e: 'resize'): void;
    (e: 'remove'): void;

    // Interaction
    (e: 'mousedown', value: MapMouseEvent): void;
    (e: 'mouseup', value: MapMouseEvent): void;
    (e: 'mouseover', value: MapMouseEvent): void;
    (e: 'mousemove', value: MapMouseEvent): void;
    (e: 'preclick', value: MapMouseEvent): void;
    (e: 'click', value: MapMouseEvent): void;
    (e: 'dblclick', value: MapMouseEvent): void;
    (e: 'mouseenter', value: MapMouseEvent): void;
    (e: 'mouseleave', value: MapMouseEvent): void;
    (e: 'mouseout', value: MapMouseEvent): void;
    (e: 'contextmenu', value: MapMouseEvent): void;
    (e: 'wheel', value: MapWheelEvent): void;
    (e: 'touchstart', value: MapTouchEvent): void;
    (e: 'touchend', value: MapTouchEvent): void;
    (e: 'touchmove', value: MapTouchEvent): void;
    (e: 'touchcancel', value: MapTouchEvent): void;

    // Movement
    (e: 'movestart', value: DragEvent): void;
    (e: 'move', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'moveend', value: DragEvent): void;
    (e: 'dragstart', value: DragEvent): void;
    (e: 'drag', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'dragend', value: DragEvent): void;
    (e: 'zoomstart', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'zoom', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'zoomend', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'rotatestart', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'rotate', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'rotateend', value: MapMouseEvent | MapTouchEvent): void;
    (e: 'pitchstart', value: MapDataEvent): void;
    (e: 'pitch', value: MapDataEvent): void;
    (e: 'pitchend', value: MapDataEvent): void;
    (e: 'boxzoomstart', value: MapBoxZoomEvent): void;
    (e: 'boxzoomend', value: MapBoxZoomEvent): void;
    (e: 'boxzoomcancel', value: MapBoxZoomEvent): void;

    // Lifecycle
    (e: 'load'): void;
    (e: 'render'): void;
    (e: 'idle'): void;
    (e: 'error', message: string): void;
    (e: 'webglcontextlost'): void;
    (e: 'webglcontextrestored'): void;

    // Data loading
    (e: 'data', value: MapDataEvent): void;
    (e: 'styledata', value: MapDataEvent): void;
    (e: 'sourcedata', value: MapDataEvent): void;
    (e: 'dataloading', value: MapDataEvent): void;
    (e: 'styledataloading', value: MapDataEvent): void;
    (e: 'sourcedataloading', value: MapDataEvent): void;
    (e: 'styledatamissing', id: string): void;
}
