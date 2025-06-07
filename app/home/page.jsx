'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components"
import { Flex, Input, Button, message, Upload, Select } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { products, getListProducts } from '@/lib/data';

const onSearch = value => {
    console.log('search:', value);

};

const AddProducts = () => {
    const getListSlug = getListProducts()

    const [keyPro, setKey] = useState('');
    const [slugPro, setSlug] = useState('');
    const [namePro, setNamePro] = useState('');
    const [desPro, setDesPro] = useState('');
    const [pricePro, setPricePro] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    // State products
    const [pro, setPro] = useState(products)

    // Add key
    const handleAddKey = () => {
        setKey(Math.floor(1000 + Math.random() * 9000) + "-random")
    }

    // Add slug
    const handleAddSlug = (value) => {
        setSlug(value)
    }

    // Add name products
    const handleChangeInputName = (e) => {
        setNamePro(e.target.value)
    }

    // Add des
    const handleChangeInputDes = (e) => {
        setDesPro(e.target.value)
    }

    // Add Price
    const handleChangeInputPrice = (e) => {
        setPricePro(e.target.value)
    }

    // Upload file
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }; const beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, url => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    // Add product
    const handleOnClickButtonAddPro = (e) => {
        const newPro = {
            key: keyPro,
            slug: slugPro,
            name: namePro,
            description: desPro,
            price: pricePro,
        }
        setPro(newPro, ...pro)
        handleAddKey()
    }

    // useEffect(() => {
    //     if (pro) {
    //         console.log('Done');
    //     }
    // }, [])

    return (
        <>
            <AddLayout>
                <Flex vertical style={{ gap: "10px" }} onChange={() => { handleAddKey() }}>
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="label"
                        onChange={handleAddSlug}
                        onSearch={onSearch}
                        options={getListSlug.map(items => ({
                            value: items.slug,
                            label: items.slug,
                        }))}
                    />
                    <Input placeholder="Input name products" onChange={(e) => { handleChangeInputName(e) }} />
                    <TextArea placeholder="Input description" onChange={(e) => { handleChangeInputDes(e) }} />
                    <Input suffix="VND" onChange={(e) => { handleChangeInputPrice(e) }} />
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Flex>
                <Button onClick={() => { handleOnClickButtonAddPro() }} type="primary">Thêm</Button>
            </AddLayout>
        </>
    )
}
export default AddProducts;

const AddLayout = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 80%;                                         
`