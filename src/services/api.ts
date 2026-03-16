import Restaurant from '../models/Restaurant'

const API_BASE_URL = 'https://api-ebac.vercel.app/api/efood'

export type CheckoutPayload = {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type CheckoutResponse = {
  orderId: string
}

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

  return (
    restaurants.find((restaurant) => restaurant.id === restaurantId) ?? null
  )
}

export const checkout = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> => {
  const response = await fetch(`${API_BASE_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Nao foi possivel finalizar o pedido')
  }

  return (await response.json()) as CheckoutResponse
}
