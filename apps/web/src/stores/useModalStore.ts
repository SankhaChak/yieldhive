import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ModalName } from "../utils/types";

// TODO: we should keep adding more modal props here as we add more modals
type ModalProps = {};

type State = {
  showModal: boolean;
  setShowModal: (value: boolean | ((prevState: boolean) => boolean)) => void;
  modalName: ModalName | null;
  setModalName: (value: ModalName | null) => void;
  modalProps: ModalProps;
  setModalProps: (
    value: ModalProps | ((prevState: ModalProps) => ModalProps)
  ) => void;
  handleOpenModal: (modalName: ModalName, props?: ModalProps) => void;
  handleCloseModal: (resetModalDetails?: boolean) => void;
};

export const useModalStore = create<State>()(
  devtools(
    immer((set) => ({
      showModal: false,
      modalName: null,
      setShowModal: (value) =>
        set((draft) => {
          draft.showModal =
            typeof value === "function" ? value(draft.showModal) : value;
        }),
      setModalName: (value) =>
        set((draft) => {
          draft.modalName = value;
        }),
      modalProps: {},
      setModalProps: (value) =>
        set((draft) => {
          draft.modalProps =
            typeof value === "function" ? value(draft.modalProps) : value;
        }),
      handleOpenModal: (modalName, modalProps) => {
        set((draft) => {
          draft.showModal = true;
          draft.modalName = modalName;
          if (modalProps) {
            draft.modalProps = modalProps;
          }
        });
      },
      handleCloseModal: (resetModalDetails = false) => {
        set((draft) => {
          draft.showModal = false;
          if (resetModalDetails) {
            draft.modalName = null;
            draft.modalProps = {};
          }
        });
      },
    }))
  )
);
