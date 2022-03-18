import miniWeatherApp from '../assets/weather-app-mini.png';
import weatherApp from '../assets/weather-app.png';
import miniQuizApp from '../assets/quiz-app-mini.png';
import quizApp from '../assets/quiz-app-big.png';
import cryptoApp from '../assets/crypto-app-big.png';
import miniCryptoApp from '../assets/crypto-app-mini.PNG';

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
  {
    id: 2,
    name: 'CryptoApp',
    description:
      'CryptoApp to strona internetowa zawierająca podstawowe informacje na temat rynku kryptowalut. Użytkownik na stronie może wybrać interesującą go kryptowalutę i dowiedzieć się na jej temat pożądanych informacji. Może również znaleźć adresy stron internetowych do aktualnych wiadomości medialnych. Za dostarczenie danych odpowiada coinranking oraz coingeco API dzięki serwisowi RapidApi. Zarządzanie stanem w odnieniesu do współpracy z tymi serwisami odybwa się dzięki Redux Toolkit. Struktura i style strony są zbudowane za pomocą biblioteki Bootstrap. Wykresy danych natomiast są są zrealizowane za pomocą chart.js.',
    miniPicture: miniCryptoApp,
    Picture: cryptoApp,
    gitHubHref: 'https://github.com/DawidMacialek/crypto-app',
    playHref: 'https://dawidmacialek.github.io/crypto-app',
  },
];
