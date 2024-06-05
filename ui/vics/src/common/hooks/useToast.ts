import { Bounce, toast } from "react-toastify";

function useToast() {
  const successToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { border: '2px solid gray',width: '330px' },

    });
  };

  const errorToast = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { border: '2px solid lightgray',width: '330px' },
    });
  };

  const infoToast = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { border: '2px  gray',width: '330px' },
    });
  };

  return { successToast, errorToast, infoToast };
}

export default useToast;
