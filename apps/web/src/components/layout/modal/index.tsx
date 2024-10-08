"use client";

import { useEffect } from "react";
import useBlockBodyScroll from "../../../hooks/useBlockBodyScroll";
import { useModalStore } from "../../../stores/useModalStore";
import { ModalName } from "../../../utils/types";
import SandboxInfoModal from "./sandbox";
import ModalWrapper from "./wrapper";

const Modal = () => {
  const modalProps = useModalStore((state) => state.modalProps);
  const showModal = useModalStore((state) => state.showModal);
  const setShowModal = useModalStore((state) => state.setShowModal);
  const modalName = useModalStore((state) => state.modalName);
  const setModalName = useModalStore((state) => state.setModalName);
  const setModalProps = useModalStore((state) => state.setModalProps);

  const handleCloseModal = () => {
    setModalName(null);
    setModalProps({});
  };

  useBlockBodyScroll(showModal);

  const modalMapping = {
    [ModalName.SANDBOX_INFO]: SandboxInfoModal,
  };

  const ModalComponent = modalMapping[modalName as ModalName];

  useEffect(() => {
    if (!showModal) {
      // Adding a timeout to let the modal closing animation finish before unmounting the modal
      setTimeout(() => {
        handleCloseModal();
      }, 300);
    }
  }, [showModal]);

  return (
    <ModalWrapper open={showModal} onOpenChange={setShowModal}>
      {ModalComponent && <ModalComponent {...modalProps} />}
    </ModalWrapper>
  );
};

export default Modal;
