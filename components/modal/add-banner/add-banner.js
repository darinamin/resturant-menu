import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Button, Modal, Upload } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import FlexDiv from "@/components/utils/flex-div";
// redux
import { useSelector, useDispatch } from "react-redux";
// redux actions
import { closeModal } from "redux/modal/actions";
import * as constants from "redux/modal/constants";
// styles
import { modalMaskStyle } from "../modal-container";

function BannerModal({ visible }) {
  const router = useRouter();

  const dispatch = useDispatch();
  const { mPayloads } = useSelector((state) => state.modal);

  // file props

  // file back props

  return (
    <Modal
      title={false}
      visible={visible}
      footer={false}
      //   className={lang === "ar" ? "rtl_modal" : ""}
      width="30%"
      maskStyle={modalMaskStyle}
      bodyStyle={{
        // backgroundColor: "red",
        direction: router.locale === "ar" ? "rtl" : "ltr",
      }}
      zIndex={1090}
      onCancel={() => dispatch(closeModal(constants.CLOSE_MODAL))}
    >
      <FlexDiv width="100%" direction="column" gap={20} alignItems="center">
        <h2>hello</h2>
      </FlexDiv>
    </Modal>
  );
}

export default BannerModal;
