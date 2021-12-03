//  import grafiki dla każdego obiektu w tablicy app

import toDoAppReactRedux from '../assets/toDoAppReactRedux.png';
import toDoAppReact from '../assets/toDoAppReact.png';
import miniToDoAppReactRedux from '../assets/to-app-react-redux.png';
import miniToDoAppReact from '../assets/to-do-app-react.png';
import miniExpenseTracker from '../assets/expense-tracker-mini.png';
import expenseTracer from '../assets/expenseTracker.png';

// Dane do wyświetlania treści w komponencie App, jeśli chcesz dodać kolejną pozycję dodaj obiekt w takim samym schemacie do tablicy apps
export const apps = [
  {
    id: 0,
    name: 'To do App JS-Redux',
    description:
      'Popularna wersja aplikacji do planowania zadań do wykonania, w tym przypadku stworzona za pomocą czystego JavaScriptu i biblioteki do zarządzania stanem aplikacji Redux. Zastosowanie tej biblioteki w aplikacji było częścią mojej praktycznej nauki programowania. Zapraszam do sprawdzenia możliwośći aplikacji w akcji jak również do przeglądnięcia kodu na GitHub.',
    miniPicture: miniToDoAppReactRedux,
    Picture: toDoAppReactRedux,
    gitHubHref: 'https://github.com/DawidMacialek/to-do-app-js-redux.git',
    playHref: 'https://dawidmacialek.github.io/to-do-app-js-redux/',
  },
  {
    id: 1,
    name: 'To do App React',
    description:
      'Aplikacja przydatna do planowania zadań do wykonania. Do dyspozycji mamy kalendarz oraz wyróżnienie zadania, które jest piorytetowe do wykonania. Możemy w łatwy sposób zarządzać listą zadań, przenosząc element do listy wykonanych zadań albo usuwając go z listy. Aplikacja zbudowana za pomocą biblioteki React. Składa się z komponentów wykonujących poszczególne zadania. Stworzyłem tą aplikację w ramach praktyki w procesie nauki programowania. Zapraszam do skorzystania z użyteczności aplikacji i przejrzenia kodu.',
    miniPicture: miniToDoAppReact,
    Picture: toDoAppReact,
    gitHubHref: 'https://github.com/DawidMacialek/to_do_app.git',
    playHref: 'https://dawidmacialek.github.io/to_do_app/',
  },
  {
    id: 2,
    name: 'Expense Tracker',
    description:
      'Aplikacja umożliwiająca sledzenie wydatków i przychodów gospodarstwa domowego. Użytkownik może wpisywać kwotę jaką wydał lub kwotę jaka zasiliła jego budżet. Aplikacja oblicza saldo końcowe oraz pokazuje historię transakcji. Projekt wykonany w JavaScript, Html i Css. Wprowadzane dane przechowywane są w lokalnym schowku przeglądarki. ',
    miniPicture: miniExpenseTracker,
    Picture: expenseTracer,
    gitHubHref: 'https://github.com/DawidMacialek/ExpenseTracker',
    playHref: 'https://dawidmacialek.github.io/ExpenseTracker/',
  },
];
