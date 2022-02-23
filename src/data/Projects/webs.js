import miniWeatherApp from '../assets/weather-app-mini.png';
import weatherApp from '../assets/weather-app.png';
import miniQuizApp from '../assets/quiz-app-mini.png';
import quizApp from '../assets/quiz-app-big.png';

export const webs = [
  {
    id: 0,
    name: 'Weather App',
    description:
      'Aplikacja umożliwiająca sprawdzenie pogody w danym mieście. Użytkownik wpisuje miasto dla którego, chce zobaczyć warunki pogodowe takie jak temperaturę i stan zachmurzenia. Aplikacja korzysta z API openweathermap.org/. ',
    miniPicture: miniWeatherApp,
    Picture: weatherApp,
    gitHubHref: 'https://github.com/DawidMacialek/WeatherAPP',
    playHref: 'https://dawidmacialek.github.io/WeatherAPP/',
  },
  {
    id: 1,
    name: 'QuizApp',
    description:
      'QuizApp to aplikacja webowa polegająca na rozwiązywaniu quizu. Uzytkownik wybiera kategorię oraz ilość pytań na które chce odpowiadać. Ma zaznaczyć prawidłową odpowiedź, jedną z czterech odpowiedzi. Na każdą odpowiedź użytkownik ma 1 minutę. Kiedy czas się skończy, automatycznie zostanie wyświetlony wynik. Do generowania pytań aplikacja korzysta z zewnętrzenego API https://opentdb.com/.  ',
    miniPicture: miniQuizApp,
    Picture: quizApp,
    gitHubHref: 'https://github.com/DawidMacialek/quizApp',
    playHref: 'https://dawidmacialek.github.io/quizApp/',
  },
];
