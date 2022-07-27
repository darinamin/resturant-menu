import { useEffect, useState } from "react";
// components
import {
  Modal,
  Form,
  Row,
  Col,
  Table,
  Input,
  Button,
  Space,
  message,
  Image as AntImage,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  WarningOutlined,
} from "@ant-design/icons";
// redux
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/actions";
// hooks
import useFetch from "../../../utils/useFetch";
// layout
// actions
import * as constants from "@/redux/modal/constants";
import Image from "next/image";
function AddBanner() {
  const dispatch = useDispatch();
  //list categories
  const {
    data = [],
    error,
    loading,
    executeFetch,
  } = useFetch(
    process.env.NEXT_PUBLIC_HOST_API + process.env.NEXT_PUBLIC_LIST_BANNER,
    "get",
    {},
    true
  );

  const {
    data: deleteData = {},
    error: deleteError,
    loading: deleteLoading,
    executeFetch: deleteExecuteFetch,
  } = useFetch(
    process.env.NEXT_PUBLIC_HOST_API + process.env.NEXT_PUBLIC_DELETE_BANNER,
    "get",
    {},

    false
  );

  //handle edit item
  const handleEditItem = (id, image) => {
    console.log(id);

    dispatch(
      openModal(constants.modalType_Category, executeFetch, { id, image }, true)
    );
  };
  // handle delete item
  const handleDeleteItem = (id, name) => {
    Modal.confirm({
      title: "Are you sure about delete this Category",
      content: <div>this Category will be deleted forever !</div>,
      onOk() {
        deleteExecuteFetch({ id });
      },
    });
  };

  // useEffect for delete Item
  useEffect(() => {
    if (deleteData?.status === true) {
      executeFetch();
      message.success("Category has been deleted successfully!");
    } else if (deleteData?.status === false) {
      message.error(
        deleteError ?? "Something went wrong! Please try again later"
      );
    }
  }, [deleteData, deleteError, deleteLoading]);

  // table column
  const columns = [
    {
      title: "Banner Image",
      dataIndex: "",
      key: "id",
      // width: "10%",
      render: (data) => {
        return (
          <AntImage
            src={process.env.NEXT_PUBLIC_HOST_API + data.image}
            width={100}
            height={200}
            preview={true}
          />
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "id",
      render: (data) => {
        return (
          <Space size="large" key={data}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteItem(data.id, data.name);
              }}
            >
              <DeleteOutlined style={{ color: "#f70202" }} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleEditItem(data.id, data.image);
              }}
            >
              <EditOutlined style={{ color: "#1dd3d5" }} />
            </a>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Button
        onClick={() =>
          dispatch(openModal(constants.modalType_Category, executeFetch))
        }
      >
        New Category
      </Button>
      <Table
        rowKey={"id"}
        loading={loading}
        columns={columns}
        dataSource={data?.description}
        size="small"
      />
    </>
  );
}

export default AddBanner;
