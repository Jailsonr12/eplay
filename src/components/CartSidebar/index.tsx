import { MouseEvent, useEffect, useState } from 'react'

import { useCart } from '../../contexts/CartContext'
import {
  CartAction,
  CartAside,
  CartCard,
  CartContent,
  CartImage,
  CartItemPrice,
  CartItemText,
  CartItemTitle,
  CartList,
  CartOverlay,
  CartTotal,
  CartTotalLabel,
  CartTotalValue,
  DeleteButton,
  FormActions,
  FormField,
  FormGrid,
  FormInput,
  FormLabel,
  FormTitle,
  SuccessText
} from './styles'

const toCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const CartSidebar = () => {
  const { clearCart, closeCart, isOpen, items, removeItem, totalPrice } =
    useCart()
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>(
    'cart'
  )
  const [orderId, setOrderId] = useState<number | null>(null)

  useEffect(() => {
    if (!isOpen) {
      setStep('cart')
      setOrderId(null)
    }
  }, [isOpen])

  const finishOrder = () => {
    clearCart()
    closeCart()
  }

  if (!isOpen) {
    return null
  }

  return (
    <CartOverlay onClick={closeCart}>
      <CartAside
        onClick={(event: MouseEvent<HTMLElement>) => event.stopPropagation()}
      >
        <CartContent>
          {step === 'cart' ? (
            <>
              <CartList>
                {items.map((item) => (
                  <CartCard key={item.id}>
                    <CartImage src={item.image} alt={item.title} />
                    <CartItemText>
                      <CartItemTitle>{item.title}</CartItemTitle>
                      <CartItemPrice>{toCurrency(item.price)}</CartItemPrice>
                    </CartItemText>
                    <DeleteButton
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remover item"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 6H21M8 6V4H16V6M7 6V20H17V6M10 10V17M14 10V17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </DeleteButton>
                  </CartCard>
                ))}
              </CartList>

              <CartTotal>
                <CartTotalLabel>Valor total</CartTotalLabel>
                <CartTotalValue>{toCurrency(totalPrice)}</CartTotalValue>
              </CartTotal>

              <CartAction type="button" onClick={() => setStep('delivery')}>
                Continuar com a entrega
              </CartAction>
            </>
          ) : step === 'delivery' ? (
            <>
              <FormTitle>Entrega</FormTitle>

              <FormField>
                <FormLabel>Quem ira receber</FormLabel>
                <FormInput />
              </FormField>

              <FormField>
                <FormLabel>Endereco</FormLabel>
                <FormInput />
              </FormField>

              <FormField>
                <FormLabel>Cidade</FormLabel>
                <FormInput />
              </FormField>

              <FormGrid>
                <FormField>
                  <FormLabel>CEP</FormLabel>
                  <FormInput />
                </FormField>
                <FormField>
                  <FormLabel>Numero</FormLabel>
                  <FormInput />
                </FormField>
              </FormGrid>

              <FormField>
                <FormLabel>Complemento (opcional)</FormLabel>
                <FormInput />
              </FormField>

              <FormActions>
                <CartAction type="button" onClick={() => setStep('payment')}>
                  Continuar com o pagamento
                </CartAction>
                <CartAction type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </CartAction>
              </FormActions>
            </>
          ) : step === 'payment' ? (
            <>
              <FormTitle>
                Pagamento - Valor a pagar {toCurrency(totalPrice)}
              </FormTitle>

              <FormField>
                <FormLabel>Nome no cartao</FormLabel>
                <FormInput />
              </FormField>

              <FormGrid>
                <FormField>
                  <FormLabel>Numero do cartao</FormLabel>
                  <FormInput />
                </FormField>
                <FormField>
                  <FormLabel>CVV</FormLabel>
                  <FormInput />
                </FormField>
              </FormGrid>

              <FormGrid>
                <FormField>
                  <FormLabel>Mes de vencimento</FormLabel>
                  <FormInput />
                </FormField>
                <FormField>
                  <FormLabel>Ano de vencimento</FormLabel>
                  <FormInput />
                </FormField>
              </FormGrid>

              <FormActions>
                <CartAction
                  type="button"
                  onClick={() => {
                    setOrderId(Math.floor(100000 + Math.random() * 900000))
                    setStep('success')
                  }}
                >
                  Finalizar pagamento
                </CartAction>
                <CartAction type="button" onClick={() => setStep('delivery')}>
                  Voltar para a edicao de endereco
                </CartAction>
              </FormActions>
            </>
          ) : (
            <>
              <FormTitle>Pedido realizado - Pedido #{orderId ?? 0}</FormTitle>

              <SuccessText>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </SuccessText>
              <SuccessText>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </SuccessText>
              <SuccessText>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </SuccessText>
              <SuccessText>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </SuccessText>

              <FormActions>
                <CartAction type="button" onClick={finishOrder}>
                  Concluir
                </CartAction>
              </FormActions>
            </>
          )}
        </CartContent>
      </CartAside>
    </CartOverlay>
  )
}

export default CartSidebar
