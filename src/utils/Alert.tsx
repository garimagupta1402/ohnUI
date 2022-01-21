import { toast } from "react-toastify";
import AlertBox from "../components/alerts";
import "react-toastify/dist/ReactToastify.css";

const commonErr = "OOPS! something went wrong!";

const toastList = new Set();
const MAXIMUM_TOAST = 1;

const showAlert = (type: number, message: string = commonErr) => {
  if (toast.error === undefined) {
    toast.configure({
      autoClose: 4000,
      draggable: false,
      newestOnTop: true,
      position: "top-right",
    });
  }
  
  switch (type) {
    case 1: {
      console.log(message,"message");
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.success(
          <AlertBox
            message={message}
            close={() => {
              toastList.delete(id);
            }}
          />,
          {
            onClose: () => toastList.delete(id),
          }
        );
        toastList.add(id);
      }
      break;
    }
    case 2: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.error(
          <AlertBox
            message={message}
            close={() => {
              toastList.delete(id);
            }}
          />,
          {
            onClose: () => toastList.delete(id),
          }
        );
        toastList.add(id);
      }
      break;
    }
    case 3: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.info(
          <AlertBox
            message={message}
            close={() => {
              toastList.delete(id);
            }}
          />,
          {
            onClose: () => toastList.delete(id),
          }
        );
        toastList.add(id);
      }
      break;
    }
    case 4: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.warning(
          <AlertBox
            message={message}
            close={() => {
              toastList.delete(id);
            }}
          />,
          {
            onClose: () => toastList.delete(id),
          }
        );
        toastList.add(id);
      }
      break;
    }
  }
};

export default showAlert;
