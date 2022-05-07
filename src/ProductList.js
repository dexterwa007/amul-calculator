import React from 'react';

import { List } from 'antd';

function ProductList(props) {

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={props.list}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<a href="https://ant.design">{item.name}</a>}
                    />
                </List.Item>
                )}
            />
        </div>
    )
}

export default ProductList;
