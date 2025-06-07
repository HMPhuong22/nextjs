'use client'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { getListProducts } from '@/lib/data'
import Link from 'next/link'
import { Card, Avatar, Image } from 'antd';
const { Meta } = Card;
import styled from 'styled-components';

export default function productsList() {
    const listProducts = getListProducts()
    return (
        <>
            <Container>
                <ListLayout>
                    {listProducts.map(item => {
                        return (
                                <Card
                                    key={item.key}
                                    style={{ width: "100%", height: "400px" }}
                                    cover={
                                        <Image
                                            alt={item.name}
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Link href={`/products/${item.slug}`}>
                                        <Meta
                                            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                            title={item.name}
                                            description={item.price}
                                        />
                                    </Link>
                                </Card>
                        )
                    })}
                </ListLayout>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 60px);
`
const ListLayout = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto auto;
    /* flex-wrap: wrap; */
    width: 80%;
    height: 100%;
    overflow-y: scroll;
    margin: 0 auto;
    &::-webkit-scrollbar { display: none; }
`