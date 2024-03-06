import { ref } from "vue";

export default function useZoom(initialZoom) {
  const zoom = ref(initialZoom);

  const onPlusZoom = () => {
    zoom.value++;
  };

  const onMinusZoom = () => {
    zoom.value--;
  };

  return [zoom, onPlusZoom, onMinusZoom];
}
