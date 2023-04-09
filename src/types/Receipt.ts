import Menu from './Menu';

export default interface Receipt {
    id?: string;
    menu?: Menu[];
    totalPrice?: number;
}
