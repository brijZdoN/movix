import React,{useEffect,useState} from 'react'
import './style.css'
import Card from '../../components/Card/Card'

function ListPage(params) {

  return (
    <>
      <div className='search-container'>
        <input type='text' className='search-input' placeholder='🔍  Search' />
      </div>
      <div className='container'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      

      
      </div>
    </>
  )
}

export default ListPage
