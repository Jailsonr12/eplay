import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurant'
import { getRestaurants } from '../../services/api'
import { PageMessage, PageSection } from '../../styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getRestaurants(controller.signal)
      .then((data) => {
        setRestaurants(data)
        setError('')
      })
      .catch((err: Error) => {
        if (err.name !== 'AbortError') {
          setError('Nao foi possivel carregar os restaurantes.')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  if (isLoading) {
    return (
      <PageSection>
        <div className="container">
          <PageMessage>Carregando restaurantes...</PageMessage>
        </div>
      </PageSection>
    )
  }

  if (error) {
    return (
      <PageSection>
        <div className="container">
          <PageMessage>{error}</PageMessage>
        </div>
      </PageSection>
    )
  }

  return (
    <ProductsList
      title="Restaurantes"
      background="gray"
      restaurants={restaurants}
    />
  )
}

export default Home
