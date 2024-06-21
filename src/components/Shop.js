import React from 'react'

export default function Shop() {
  return (
    <div className='text-center container'>
        <h2 className='text-center'>Update The Money</h2>
        <div class="container d-flex justify-content-between">
        <button type="button" class="m-2 btn btn-warning">Reduce</button>
        <button type="button" class="m-2 btn btn-info">0</button>
        <button type="button" class="m-2 btn btn-danger">Add</button>
        </div>
    </div>
  )
}
