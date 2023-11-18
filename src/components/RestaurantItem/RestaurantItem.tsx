import { MenuInterface, RestaurantListInterface } from "../../interfaces/RestaurantList.interface";
import Menues from "../Menues/Menues";

interface RestaurantItemProps { 
    restaurant: RestaurantListInterface
    handleAddCart ?: (menu : MenuInterface) => void
}

const RestaurantItem = ({ restaurant, handleAddCart }: RestaurantItemProps) => {
    return (
        <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
                <Menues menues={restaurant.menu} handleAddCart={handleAddCart}/>
            </td>
        </tr>
    );
}

export default RestaurantItem;
