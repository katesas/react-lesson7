import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';

export default function AntTest() {
  return (
    <Space direction="vertical">
    <Space wrap>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
    </Space>
    <Space wrap>
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
    </Space>
  </Space>
  )
}
