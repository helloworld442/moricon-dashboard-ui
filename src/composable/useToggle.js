import { ref } from "vue";

export default function useToggle() {
  const active = ref(false);

  const onToggleActive = () => {
    active.value = !active.value;
  };

  return { active, onToggleActive };
}
