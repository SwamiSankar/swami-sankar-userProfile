import React, { useEffect, useState } from 'react';

import { Card, Modal, Form, Input } from 'antd';
import {
  EditOutlined,
  HeartFilled,
  HeartTwoTone,
  DeleteFilled,
} from '@ant-design/icons';

import styles from './UserCard.module.css';
import CoverImage from '../CoverImage/CoverImage';
import CardDetails from '../CardDetails/CardDetails';

const { Meta } = Card;

const UserCard = ({ user, handleDelete }) => {
  const [fill, setFill] = useState(false);
  const [visible, setVisible] = useState(false);

  const [editedUser, setEditedUser] = useState(user);

  const username = user.username;
  const email = editedUser.email;
  const phone = editedUser.phone;
  const website = editedUser.website;

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onEdit = (values) => {
    setEditedUser(values);

    setVisible(false);
  };

  useEffect(() => {
    console.log(editedUser);
  }, [editedUser]);

  const initialValues = {
    name: editedUser.name,
    email: editedUser.email,
    phone: editedUser.phone,
    website: editedUser.website,
  };
  const validateMessage = {
    required: '${label} is required!',
  };
  const [form] = Form.useForm();

  return (
    <Card
      className={`${styles.userCard} ${styles.cardBorder}`}
      bordered={true}
      cover={<CoverImage username={username} />}
      actions={[
        <button className={styles.cardButton} onClick={() => setFill(!fill)}>
          {fill ? (
            <HeartFilled style={{ color: '#FF0000' }} />
          ) : (
            <HeartTwoTone twoToneColor="#eb2f96" />
          )}
        </button>,
        <>
          <button
            className={styles.cardButton}
            onClick={() => {
              showModal(true);
            }}
          >
            <EditOutlined key="edit" />
          </button>
          <Modal
            title="Edit User"
            visible={visible}
            onCancel={handleCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onEdit(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >
            <Form
              form={form}
              name="user-edit"
              validateMessages={validateMessage}
              initialValues={initialValues}
            >
              <Form.Item
                name={['name']}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['email']}
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={['phone']}
                label="Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['website']}
                label="Website"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </>,

        <button
          className={styles.cardButton}
          onClick={() => {
            handleDelete(user.id);
          }}
        >
          <DeleteFilled />
        </button>,
      ]}
    >
      <Meta
        title={editedUser.name}
        description={
          <CardDetails email={email} phone={phone} website={website} />
        }
      />
    </Card>
  );
};

export default UserCard;
