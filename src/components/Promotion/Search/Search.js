import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PromotionList from 'components/Promotion/List/List'
import './Search.css'

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = {}
    if (search) {
      params.title_like = search
    }
    axios.get('http://localhost:5000/promotions?_embed=comments', { params }).then((response) => {
      setPromotions(response.data)
    })
  }, [search])

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>PromoShow</h1>
        <Link to="/create"> Nova Promoção </Link>
      </header>
      <input
        type="search"
        placeholder="Buscar Promoção"
        className="promotion-search__input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  )
}

export default PromotionSearch
