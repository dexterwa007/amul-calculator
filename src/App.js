import './App.css';

import React, { useState, useEffect } from 'react';
import { Button, Divider, Drawer, message } from 'antd';
import { MenuUnfoldOutlined, PlusOutlined } from '@ant-design/icons';

import logo from './assets/logo.webp';
import FormContent  from './FormContent';
import ProductList from './ProductList';

function App() {
  const [visible, setDrawerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('productList')) || [];
    setProductList(list);
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
    setDrawerVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  }

  const onFromSubmit = ({ name, price, unit }) => {
    setProductList([...productList, { name, price, unit }])
    localStorage.setItem('productList', JSON.stringify([...productList, { name, price, unit }]));

    message.success('Product added', 1);
  }

  return (
    <div className="amul-app">
      <div className='header'>
        <img className='app-logo' src={logo} alt='amul logo' />
        <Button
          onClick={showDrawer}
          className='menu-button'
          shape="round"
          icon={<MenuUnfoldOutlined />}
          size='medium'
        />
      </div>
      <Divider plain>Products</Divider>
      <Drawer width={280} mask title="Basic Drawer" placement="left" onClose={onDrawerClose} visible={visible}>
        <Button onClick={showModal} type="primary" ghost shape="round" icon={<PlusOutlined />}>
          Add product
        </Button>
      </Drawer>
      <FormContent
        isModalVisible={isModalVisible}
        onFromSubmit={onFromSubmit}
        handleModalCancel={handleModalCancel}
      />
      <ProductList list={productList}/>
    </div>
  );
}

export default App;
