import Menu from './Menu';

export default interface Restaurants {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
};
