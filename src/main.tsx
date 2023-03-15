import ReactDOM from 'react-dom/client';
import App from './App';
import worker from './mocks/workers';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }
  worker.start();

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

main();
