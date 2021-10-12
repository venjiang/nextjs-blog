import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>第一篇博客</title>
            </Head>
            <h1>第一篇博客</h1>
            <h2>
                <Link href="/">
                    <a>返回首页</a>
                </Link>
            </h2>
        </Layout>
    )
}
