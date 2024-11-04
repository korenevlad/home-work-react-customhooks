//  Для Задача 1

// import './App.css';
// import {useFetch} from './customHooks/useFetch'

// function App() {
//   const {
//     data,
//     isLoading,
//     error,
//     refetch
//   } = useFetch('https://jsonplaceholder.typicode.com/posts');

//   return (
//     <div>
//       <div>
//       <button onClick={() => refetch({
//           params: {
//             _limit: 3
//           }
//         })}>
//           Перезапросить
//         </button>
//       </div>
//       {isLoading && 'Загрузка...'}
//       {error && 'Произошла ошибка'}
//       {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
//     </div>
//   );
// }

import { useLocalStorage } from './customHooks/useLocalStorage';

function App() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}

export default App;