import React from 'react'
import Foods from '../containers/Foods'

export default [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: '/persons/:id',
    main: () => <Person />
  },
  {
    path: '/foods',
    main: () => <Foods />
  },
  {
    main: () => <h2>No match</h2>
  }
]


const Person = (props) => {
  debugger
  return (
    <div>1111</div>
  )
}