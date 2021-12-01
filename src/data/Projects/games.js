//  import grafiki dla każdego obiektu w tablicy games
import saperMiniPhoto from '../assets/saper.png';
import saperBigPhoto from '../assets/saper-info-photo.png';

import memoryMiniPhoto from '../assets/memory.png';
import memoryBigPhoto from '../assets/memoryBigPhoto.png';

import wisielecMiniPhoto from '../assets/hangmanMiniPhoto.png';
import wisielecBigPhoto from '../assets/hangmanBigPhoto.png';

// Dane do wyświetlania treści w komponencie Projects, jeśli chcesz dodać kolejną pozycję dodaj obiekt w takim samym schemacie do tablicy games
export const games = [
  {
    id: 0,
    name: 'Saper',
    description:
      'Klasyczna jednoosobowa gra komputerowa z 1981 roku. Gra polega na odkrywaniu poszczególnych pól na planszy w taki sposób, aby nie natrafić na minę. Odkrycie zaminowanego pola jest automatycznie przegraną rozgrywką. Wygrywamy odkrywając wszystkie wolne od min pola. Na każdym z odkrywanych pól napisana jest liczba min, które bezpośrednio stykają się z danym polem (od jeden do ośmiu). Prawym przyciskiem myszki oznaczymy dane pole flagą, gdzie potencjalnie może się tam ukrywać mina. Do wyboru mamy 3 poziomy, niestandardowo jednak dodałem jeszcze możliwość stworzenia własnej tablicy do gry. Moja wersja gry została napisana za pomocą  jezyków: html, css i javascript. Kod składa się z poszczególnych obiektów, które wykonują odrębne zadania. Wszystkie połączone są w jedynm głównym pliku "Game". Zapraszam do gry i analizy kodu.',
    miniPicture: saperMiniPhoto,
    Picture: saperBigPhoto,
    gitHubHref:
      'https://github.com/DawidMacialek/Project-Games/tree/main/minesweeper',
    playHref:
      'https://dawidmacialek.github.io/Project-Games/minesweeper/minesweeper.html',
  },
  {
    id: 1,
    name: 'Hangman',
    description:
      ' Jest to gra, polegająca na odgadywaniu słów. Gracz wpisuje literę, jeśli trafia prawidłowo to litera uzupełnia brakujące miejsca, w przeciwnym wypadku rysuję się kolejna kreska tworząc obraz szubienicy. Gracz przegrywa kiedy szubienica staję się w pełni narysowana. Gra opiera się o prostą logikę i została napisana za pomocą: html, css i javascript. Jest to jeden z pierwszych projektów napisanych na poczatku mojej nauki javascript. Kod nie był modyfikowany i odzwierciedla etap moich ówczesnych umiejętności. Zapraszam do gry lub analizy kodu. ',
    miniPicture: wisielecMiniPhoto,
    Picture: wisielecBigPhoto,
    gitHubHref:
      'https://github.com/DawidMacialek/Project-Games/tree/main/hangman',
    playHref:
      'https://dawidmacialek.github.io/Project-Games/hangman/hangman.html',
  },
  {
    id: 2,
    name: 'Memory',
    description:
      'Jest to gra polegająca na szukaniu par takich samych kart. Gracz odkrywa jedną wybraną kartę, a następnie odkrywa drugą wybraną kartę, jeśli obydwie karty okażą się identyczne to zostają usunięte z planszy. Natomiast, jeżeli wybrane karty są różne od siebie zostają po kilku sekundach ponownie zakryte. Gracz stara się zapamiętać gdzie leżą karty konkretne co ułatwi znajdowanie par. Rozgrywka trwa do momentu wyczyszczenia planszy. Gra oparta o prostą logikę javascript w oparciu o programowanie zorientowane obiektowo.',
    miniPicture: memoryMiniPhoto,
    Picture: memoryBigPhoto,
    gitHubHref:
      'https://github.com/DawidMacialek/Project-Games/tree/main/memory%20game',
    playHref:
      'https://dawidmacialek.github.io/Project-Games/memory%20game/index.html',
  },
];
