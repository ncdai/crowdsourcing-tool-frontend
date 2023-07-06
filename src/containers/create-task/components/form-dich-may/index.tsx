import { Button, Form, Input, Select } from "antd";
import React from "react";

import { FormHeading } from "@/components/elements";

export type IFormDataDichMay = {
  idDuAn: number;
  vanBan: string;
  idNgonNgu: number;
  dsPhanCong: string[];
};

type IProps = {
  initialValues?: Partial<IFormDataDichMay>;
  onFinish?: (values: IFormDataDichMay) => void;
};

export const FormDichMay: React.FC<IProps> = ({ initialValues, onFinish }) => {
  return (
    <Form
      name="basic"
      layout="vertical"
      autoComplete="off"
      requiredMark={false}
      //
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <div className="form-box">
        <FormHeading title="Dịch máy" />

        <Form.Item
          label="ID dự án"
          name="idDuAn"
          rules={[{ required: true, message: "Vui lòng nhập ID dự án" }]}
        >
          <Input type="text" placeholder="ID dự án" size="large" disabled />
        </Form.Item>

        <Form.Item
          label="Văn bản"
          name="vanBan"
          rules={[{ required: true, message: "Vui lòng nhập văn bản" }]}
        >
          <Input.TextArea placeholder="Nhập văn bản" size="large" />
        </Form.Item>

        <Form.Item label="Ngôn ngữ" name="idNgonNgu">
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Chọn ngôn ngữ"
            options={[
              { label: "Tiếng Việt", value: 1 },
              { label: "Tiếng Anh", value: 2 },
            ]}
            size="large"
          />
        </Form.Item>

        <Form.Item label="Phân công" name="dsPhanCong">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Chọn người gán nhãn"
            options={[
              { label: "User 1", value: 1 },
              { label: "User 2", value: 2 },
              { label: "User 3", value: 3 },
            ]}
            size="large"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
          Thêm
        </Button>
      </div>
    </Form>
  );
};