//  import grafiki dla każdego obiektu w tablicy app

import noPicture from '../assets/noPicture.png';
import toDoAppReactRedux from '../assets/toDoAppReactRedux.png';
import toDoAppReact from '../assets/toDoAppReact.png';
import miniToDoAppReactRedux from '../assets/to-app-react-redux.png';
import miniToDoAppReact from '../assets/to-do-app-react.png';

// Dane do wyświetlania treści w komponencie App, jeśli chcesz dodać kolejną pozycję dodaj obiekt w takim samym schemacie do tablicy apps
export const apps = [
  {
    id: 0,
    name: 'To do App React-Redux',
    description:
      'To do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create app',
    miniPicture: miniToDoAppReactRedux,
    Picture: toDoAppReactRedux,
    gitHubHref: 'https://github.com/DawidMacialek/to-do-app-js-redux.git',
    playHref: 'https://dawidmacialek.github.io/to-do-app-js-redux/',
  },
  {
    id: 1,
    name: 'To do App React',
    description:
      'To do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create appTo do App made by react create app ',
    miniPicture: miniToDoAppReact,
    Picture: toDoAppReact,
    gitHubHref: 'https://github.com/DawidMacialek/to_do_app.git',
    playHref: 'https://dawidmacialek.github.io/to_do_app/',
  },
];
