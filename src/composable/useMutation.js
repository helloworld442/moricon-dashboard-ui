import { ref } from "vue";

export default function useMutation(promiseCreator) {
  const status = ref({ isSuccess: false, isError: false });

  const mutate = async (data) => {
    try {
      await promiseCreator(data);
      status.value.isSuccess = true;
    } catch (error) {
      status.value.isError = true;
    }
  };

  return { status, mutate };
}
