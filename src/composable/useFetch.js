import { ref } from "vue";

export default function useFetch(promiseCreator) {
  const data = ref(null);
  const error = ref(null);

  const loader = async (params) => {
    try {
      data.value = await promiseCreator(params);
    } catch (e) {
      error.value = e;
    }
  };

  return { data, error, loader };
}
