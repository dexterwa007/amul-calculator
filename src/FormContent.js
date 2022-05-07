import React, { useState, useEffect } from 'react'
import { Input, Divider, Modal } from 'antd';


function FormContent(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');

    const handleModalOk = () => {
        props.onFromSubmit({ name, price, unit });
    };

    useEffect(() => {
        setName('');
        setPrice('');
        setUnit('');
    }, [props.isModalVisible]);
    

    return (
        <Modal
            title="Add product"
            visible={props.isModalVisible}
            onOk={handleModalOk}
            onCancel={props.handleModalCancel}
        >
            <div>NAME</div>
            <Input
                size='middle'
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Divider />
            <div>PRICE</div>
            <Input
                size='middle'
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Divider />
            <div>UNIT</div>
            <Input
                size='middle'
                placeholder="Unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
            />
        </Modal>
    );
}

export default FormContent