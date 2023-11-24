import React from 'react'
import NewsItem from 'components/NewsItem/NewsItem'
import { List } from './NewsList.styled'

function NewsList({news}) {
  return (
    <List>
    {news.map(n => (
       <NewsItem 
       key={n.id}
       />
    ))}
    </List>
  )
}

export default NewsList