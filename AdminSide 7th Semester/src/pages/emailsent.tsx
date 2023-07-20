import React from 'react'
import EmailSentModule from '../modules/emailsentmodule/EmailSentModule'
import Head from 'next/head'

const emailsent = () => {
  return (
    <>
    <Head>
    <title> One of mint Charity |Email sent</title>
  </Head>
      <EmailSentModule/>
      </>
  )
}

export default emailsent