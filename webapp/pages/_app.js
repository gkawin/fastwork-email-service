import './_app.styl'
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { LeftSidebar, NavItem } from '../components/nav'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>PropCircle</title>
        </Head>
        <LeftSidebar>
          <NavItem to='/campaign'>Campaign</NavItem>
          <NavItem to='/activity'>Activity</NavItem>
        </LeftSidebar>
        <section className='content'>
          <Component {...pageProps} />
        </section>
      </Container>
    )
  }
}