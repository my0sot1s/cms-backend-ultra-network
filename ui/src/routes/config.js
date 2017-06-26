import React, { Component } from 'react'
export default [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: '/persons/:id',
    sidebar: () => <div>persion!</div>,
    main: () => <Person />
  },
  {
    sidebar: () => <div>No match!</div>,
    main: () => <h2>No match</h2>
  }
]


const Person = (props) => {
  debugger
  return (
    <div>1111</div>
  )
}