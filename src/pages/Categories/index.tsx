import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfileHero from '../../components/ProfileHero'
import RestaurantMenu from '../../components/RestaurantMenu'
import Restaurant from '../../models/Restaurant'
import { getRestaurantById } from '../../services/api'
import { PageMessage, PageSection } from '../../styles'

const Categories = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const restaurantId = Number(id)

    if (!restaurantId) {
      setError('Restaurante nao encontrado.')
      setIsLoading(false)
      return
    }

    const controller = new AbortController()

    getRestaurantById(restaurantId, controller.signal)
      .then((data) => {
        if (!data) {
          setError('Restaurante nao encontrado.')
          return
        }

        setRestaurant(data)
        setError('')
      })
      .catch((err: Error) => {
        if (err.name !== 'AbortError') {
          setError('Nao foi possivel carregar o cardapio.')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [id])

  if (isLoading) {
    return (
      <PageSection>
        <div className="container">
          <PageMessage>Carregando cardapio...</PageMessage>
        </div>
      </PageSection>
    )
  }

  if (error || !restaurant) {
    return (
      <PageSection>
        <div className="container">
          <PageMessage>{error || 'Restaurante nao encontrado.'}</PageMessage>
        </div>
      </PageSection>
    )
  }

  return (
    <>
      <ProfileHero restaurant={restaurant} />
      <RestaurantMenu dishes={restaurant.cardapio} />
    </>
  )
}

export default Categories
