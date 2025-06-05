"use client"

import { getListProducts } from '@/lib/data'
import Link from 'next/link'
import { Card } from 'antd';
import styled from 'styled-components';

export default function productsList() {
    const listProducts = getListProducts()
    return (
        <>
            <Container>
                <ListLayout>
                    {listProducts.map(item => {
                        return (

                            <Link href={`/products/${item.slug}`} style={{width: "20%", height: "400px", margin: "30px"}}>
                                <Card
                                    hoverable
                                    style={{ width: "100%", height: "400px"}}
                                >
                                    <h1>{item.name}</h1>
                                </Card>
                            </Link>
                        )
                    })}
                </ListLayout>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const ListLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    background-color: lightgrey;
    overflow-y: auto;
`