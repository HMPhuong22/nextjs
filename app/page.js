import { Menu } from "antd"
import { BarChartOutlined, GoldOutlined, HomeOutlined } from '@ant-design/icons';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Menu mode="horizontal" items={[
        { label: 'Home', key: 'home', icon: <HomeOutlined /> },
        {
          label: (
            <Link href='/products'>Products list</Link>
          ),
          key: 'products-list',
          icon: <GoldOutlined />
        },
        { label: 'Statistics', key: 'statistics', icon: <BarChartOutlined /> },
      ]}></Menu>
    </>
  );
}
