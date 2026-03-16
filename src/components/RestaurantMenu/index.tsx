import { MouseEvent, useState } from 'react'
import { MenuItem } from '../../models/Restaurant'
import { useAppDispatch } from '../../store/hooks'
import { addItem, openCart } from '../../store/reducers/cart'
import { formatCurrency } from '../../utils/format'
import {
  CloseButton,
  List,
  ListSection,
  MenuButton,
  MenuCard,
  MenuDescription,
  MenuImage,
  MenuTitle,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalOverlay,
  ModalServing,
  ModalText,
  ModalTitle
} from './styles'

type Props = {
  dishes: MenuItem[]
}

const RestaurantMenu = ({ dishes }: Props) => {
  const dispatch = useAppDispatch()
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null)

  const openDish = (dish: MenuItem) => setSelectedDish(dish)

  const addDishToCart = () => {
    if (!selectedDish) {
      return
    }

    dispatch(
      addItem({
        productId: selectedDish.id,
        image: selectedDish.foto,
        title: selectedDish.nome,
        price: selectedDish.preco
      })
    )
    setSelectedDish(null)
    dispatch(openCart())
  }

  return (
    <>
      <ListSection>
        <div className="container">
          <List>
            {dishes.map((dish) => (
              <MenuCard key={dish.id}>
                <MenuImage src={dish.foto} alt={dish.nome} />
                <MenuTitle>{dish.nome}</MenuTitle>
                <MenuDescription>{dish.descricao}</MenuDescription>
                <MenuButton type="button" onClick={() => openDish(dish)}>
                  Adicionar ao carrinho
                </MenuButton>
              </MenuCard>
            ))}
          </List>
        </div>
      </ListSection>

      {selectedDish && (
        <ModalOverlay onClick={() => setSelectedDish(null)}>
          <ModalContent
            onClick={(event: MouseEvent<HTMLDivElement>) =>
              event.stopPropagation()
            }
          >
            <CloseButton type="button" onClick={() => setSelectedDish(null)}>
              &times;
            </CloseButton>
            <ModalImage src={selectedDish.foto} alt={selectedDish.nome} />
            <ModalText>
              <ModalTitle>{selectedDish.nome}</ModalTitle>
              <ModalDescription>{selectedDish.descricao}</ModalDescription>
              <ModalServing>Serve: {selectedDish.porcao}</ModalServing>
              <ModalAction type="button" onClick={addDishToCart}>
                Adicionar ao carrinho - {formatCurrency(selectedDish.preco)}
              </ModalAction>
            </ModalText>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default RestaurantMenu
