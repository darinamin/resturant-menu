import { useRouter } from "next/router";
import { useCallback } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import * as constants from "redux/modal/constants";
import { closeModal, openModal } from "redux/modal/actions";
//components
import BannerModal from "@/components/modal/add-banner/add-banner";

export const modalMaskStyle = {
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(225, 225, 225, 0.2)",
};

function ModalContainer({ locale }) {
  const router = useRouter();

  const { visible, modalType, mPayloads, successAction } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const onClose = useCallback(() => dispatch(closeModal()), []);

  const toggleModals = useCallback((e, close, open) => {
    e.preventDefault();
    dispatch(closeModal(close));
    dispatch(openModal(open));
  }, []);

  return (
    <>
      {/* {visible === true && modalType === constants.modalType_Login && (
        <LoginModal
          visible={visible}
          onClose={onClose}
          locale={locale}
          toggleModals={toggleModals}
          mPayloads={mPayloads}
          router={router}
        />
      )}
    {visible === true && modalType === constants.modalType_register && (
        <RegisterModal
          visible={visible}
          onClose={onClose}
          locale={locale}
          toggleModals={toggleModals}
          mPayloads={mPayloads}
        />
      )} */}

      {visible === true && modalType === constants.modalType_AddBanner && (
        <BannerModal
          visible={visible}
          onClose={onClose}
          locale={locale}
          toggleModals={toggleModals}
          mPayloads={mPayloads}
        />
      )}
    </>
  );
}

export default ModalContainer;
