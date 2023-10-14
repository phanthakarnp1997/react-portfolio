import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TOAST_SEND_EMAIL_SUCCESS = () =>
  toast.success("Email sent successfully", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const TOAST_SEND_EMAIL_FAILED = () =>
  toast.error("Failed to send email", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
