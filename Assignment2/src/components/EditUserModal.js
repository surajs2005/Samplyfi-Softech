import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Space, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, BankOutlined, EnvironmentOutlined } from '@ant-design/icons';

function EditUserModal({ user, visible, onSave, onCancel }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user && visible) {
      form.setFieldsValue({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        companyName: user.company?.name || '',
        street: user.address?.street || '',
        suite: user.address?.suite || '',
        city: user.address?.city || '',
        zipcode: user.address?.zipcode || ''
      });
    }
  }, [user, visible, form]);

  const handleSubmit = async (values) => {
    try {
      const updatedUser = {
        ...user,
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        website: values.website,
        company: {
          ...user.company,
          name: values.companyName
        },
        address: {
          ...user.address,
          street: values.street,
          suite: values.suite,
          city: values.city,
          zipcode: values.zipcode
        }
      };
      
      onSave(updatedUser);
    } catch (error) {
      message.error('Failed to update user');
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Edit User"
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600}
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Please input the name!' },
            { min: 2, message: 'Name must be at least 2 characters!' }
          ]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Enter full name" 
          />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please input the username!' },
            { min: 3, message: 'Username must be at least 3 characters!' }
          ]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Enter username" 
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input the email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input 
            prefix={<MailOutlined />} 
            placeholder="Enter email address" 
          />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: 'Please input the phone number!' }
          ]}
        >
          <Input 
            prefix={<PhoneOutlined />} 
            placeholder="Enter phone number" 
          />
        </Form.Item>

        <Form.Item
          label="Website"
          name="website"
          rules={[
            { required: true, message: 'Please input the website!' }
          ]}
        >
          <Input 
            prefix={<GlobalOutlined />} 
            placeholder="Enter website" 
          />
        </Form.Item>

        <Form.Item
          label="Company Name"
          name="companyName"
        >
          <Input 
            prefix={<BankOutlined />} 
            placeholder="Enter company name" 
          />
        </Form.Item>

        <Form.Item
          label="Street"
          name="street"
        >
          <Input 
            prefix={<EnvironmentOutlined />} 
            placeholder="Enter street address" 
          />
        </Form.Item>

        <Form.Item
          label="Suite"
          name="suite"
        >
          <Input 
            prefix={<EnvironmentOutlined />} 
            placeholder="Enter suite/apartment" 
          />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
        >
          <Input 
            prefix={<EnvironmentOutlined />} 
            placeholder="Enter city" 
          />
        </Form.Item>

        <Form.Item
          label="Zipcode"
          name="zipcode"
        >
          <Input 
            prefix={<EnvironmentOutlined />} 
            placeholder="Enter zipcode" 
          />
        </Form.Item>

        <Form.Item>
          <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Button onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditUserModal;
