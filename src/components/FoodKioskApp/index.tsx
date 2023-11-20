import FilterableMenuContainer from './components/FilterableMenuContainer';
import useInit from './hooks/useInit';

export default function FookKioskAPP() {
  useInit();

  return <FilterableMenuContainer />;
}
