import ReactDOM from 'react-dom/client';

import App from './App';

async function main() {
  const response = await fetch('http://localhost:3000/restaurants');
  const { restaurants } = await response.json();

  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<App data={restaurants} />);
}

main();
