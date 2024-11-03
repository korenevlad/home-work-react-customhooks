import './App.css';
import {useFetch} from './customHooks/useFetch'

function App() {
  const {
    data,
    isLoading,
    error
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <div>
      
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}

export default App;
