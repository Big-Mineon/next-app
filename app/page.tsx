'use client'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Finance from '@/components/finance'
import Sales from '@/components/sales'
import DescriptionBoard from '@/components/descriptionBoard'
import Notification from '@/components/notification'

export default function Home() {

  return (
    <main className="relative container mx-auto py-body-y phone-sm:p-3 bg-white">
      <div className='animate-slide-down-header'>
        <Header />
        <Navbar />
      </div>
      <Finance />
      <Sales />
      <DescriptionBoard />
      <Notification />
    </main>
  )
}
