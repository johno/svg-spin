import React from 'react'
import Head from 'next/head'

import Box from '../components/box'
import Cog from '../components/cog'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' href='https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css' />
          <title children='svg spin' />
          <style
            children={`
              .anim-rotate {
                animation-name: rotate;
                animation-duration: 10s;
              }

              .anim-rotate-counter {
                animation-name: rotate-counter;
                animation-duration: 10s;
              }

              .ad--1 {
                animation-duration: 1s;
              }

              .ad--5 {
                animation-duration: 5s;
              }

              .ad--10 {
                animation-duration: 10s;
              }

              .ad--15 {
                animation-duration: 15s;
              }

              .ad--20 {
                animation-duration: 20s;
              }

              @keyframes rotate {
                0% {
                  transform: rotate(0deg);
                }

                100% {
                  transform: rotate(360deg);
                }
              }

              @keyframes rotate-counter {
                0% {
                  transform: rotate(360deg);
                }

                100% {
                  transform: rotate(0deg);
                }
              }
            `}
          />
        </Head>
        <div className='bg-light-green pa3 pa5-m pa6-l code'>
          <h1 children='svg spin' className='pl3' />
        </div>
        <div className='cf pa3 pa5-m pa6-l'>
          <Box
            className='light-green'
            children={<Cog className='anim-rotate ad--1' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate ad--5' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate ad--10' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate ad--15' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate ad--20' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate-counter ad--1' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate-counter ad--5' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate-counter ad--10' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate-counter ad--15' />}
          />
          <Box
            className='light-green'
            children={<Cog className='anim-rotate-counter ad--20' />}
          />
        </div>
        <footer className='bg-near-white light-green pa3 pa5-m pa6-l code'>
          <div className='pl3'>
            <a href='https://github.com/johnotander/svg-spin' className='link near-black dim' children='Crafted' /> with &lt;3 by <a href='http://twitter.com/4lpine' className='link near-black dim' children='4lpine' />.
          </div>
        </footer>
      </div>
    )
  }
}
