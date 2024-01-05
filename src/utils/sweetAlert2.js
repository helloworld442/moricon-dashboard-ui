import Swal from "sweetalert2";

const WriteSuccessToast = () =>
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })
    .fire({
      icon: "success",
      title: "작성이 성공적으로 처리되었습니다.",
    })
    .then(() => (window.location.href = "/posts/all"));

const LoginErrorToast = () =>
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })
    .fire({
      icon: "error",
      title: "로그인 후에 서비스를 이용해주세요.",
    })
    .then(() => (window.location.href = "/user/sigin"));

export { WriteSuccessToast, LoginErrorToast };
