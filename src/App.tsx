import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import FookKioskAPP from './components/FoodKioskApp';
import FoodKioskAppProvider from './components/FoodKioskApp/provider';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FoodKioskAppProvider>
        <FookKioskAPP />
      </FoodKioskAppProvider>
    </ThemeProvider>
  );
}
