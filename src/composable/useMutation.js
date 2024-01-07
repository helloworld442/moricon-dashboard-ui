import { ref } from "vue";

export default function useMutation(promiseCreator) {
  const isSuccess = ref(false);
  const isError = ref(false);

  const mutate = async (data) => {
    try {
      await promiseCreator(data);
      isSuccess.value = true;
    } catch (error) {
      isError.value = true;
    }
  };

  return { isSuccess, isError, mutate };
}
