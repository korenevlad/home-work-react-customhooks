//  Для Задачи 1

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


////  Для Задачи 2

// import { useLocalStorage } from './customHooks/useLocalStorage';

// function App() {
//   const [value, { setItem, removeItem }] = useLocalStorage('some-key');

//   return (
//     <div>
//       <p>Значение из LocalStorage: {value}</p>
//       <div>
//         <button onClick={() => setItem('new storage value')}>Задать значение</button>
//         <button onClick={() => removeItem()}>Удалить значение</button>
//       </div>
//     </div>
//   );
// }


////  Для Задачи 3

// import { useHover } from './customHooks/useHover';

// function App() {
//   const { hovered, ref } = useHover();

//   return (
//     <div ref={ref}>
//       {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
//     </div>
//   );
// }


////  Для Задачи 4

// import { useViewportSize } from './customHooks/useViewportSize';

// function App() {
//   const { height, width } = useViewportSize();

//   return (
//     <>
//       Width: {width}, height: {height}
//     </>
//   );
// }


////  Для Дополнительной задачи 1

// import { useWindowScroll } from './customHooks/useWindowScroll';

// function App() {
//   const [scroll, scrollTo] = useWindowScroll();

//   return (
//     <div>
//       <p>
//         Scroll position x: {scroll.x}, y: {scroll.y}
//       </p>
//       <button onClick={() => scrollTo({ x: 5000, y: 10000 })}>Scroll to top</button>
//     </div>
//   );
// }


////  Для Дополнительной задачи 2

// import { useToggle } from './customHooks/useToggle';

// function App() {
//   const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

//   return (
//     <button onClick={() => toggle()}>
//       {value}
//     </button>
//   );
// }

export default App;