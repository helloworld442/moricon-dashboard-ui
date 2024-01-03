import { ref } from "vue";

export default function useMutation(promiseCreator) {
  const status = ref({ isSuccess: false, isError: false, error: null });

  const mutate = async (data) => {
    try {
      await promiseCreator(data);
      status.value.isSuccess = true;
    } catch (error) {
      status.value.isError = true;
      status.value.error = error;
    }
  };

  return { status, mutate };
}
