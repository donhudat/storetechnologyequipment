import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Container from '@/components/container'
import Footer from '@/components/footer'
import { ProductResponse } from './api/product'
import { Product } from '../../models/product'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: { data: ProductResponse }) {
  return (
    <>
      <Header />
      <Container products={data.data as Product[]} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/product`)
  const data = await res.json()
  return { props: { data } }
}
