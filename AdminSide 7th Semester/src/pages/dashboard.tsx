import Head from 'next/head'

import { DashboardModule } from '../modules/dashboardmodule/DashboardModule'


const Dashboard = () => {
  return (
    <div className=''>
      <Head>
        <title>Food  | Buyers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DashboardModule/>    
    </div>
  )
}

export default Dashboard
