import Restaurant from '../models/Restaurant'

const API_BASE_URL = 'https://api-ebac.vercel.app/api/efood'

const getData = async <T>(path: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    signal
  })

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os dados da API')
  }

  return (await response.json()) as T
}

export const getRestaurants = (signal?: AbortSignal) =>
  getData<Restaurant[]>('/restaurantes', signal)

export const getRestaurantById = async (
  restaurantId: number,
  signal?: AbortSignal
) => {
  const restaurants = await getRestaurants(signal)

  return restaurants.find((restaurant) => restaurant.id === restaurantId) ?? null
}
