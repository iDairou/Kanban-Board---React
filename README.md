> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# React Kanban

Otrzymałeś zlecenie, które polega na implementacji systemu Kanban.

Idealnie się składa, ponieważ właśnie zamierzałeś poznać tę metodykę! Słyszałeś, że często jest wykorzystywana w działach IT i nie chcesz być zielony, gdy trafisz do korzystającego z niej zespołu.

Klient prosi o rozwiązanie zbliżone do tego: [kanbanblog.com/explained/](https://kanbanblog.com/explained/).

Pamiętaj, że zawsze zanim zajmiesz się planowaniem i wdrażaniem, powinieneś zgłębić wiedzę na dany temat. Proponuję, abyś zapoznał się z [4 filmami od Atlassian](https://www.youtube.com/watch?v=iVaFVa7HYj4&list=PLaD4FvsFdarR3oF1gp5_NmnlL-BQIE9sW&index=1), które pozwolą Ci lepiej zrozumieć koncepcję Kanban. Warto też przeczytać [artykuł w języku polskim](https://productvision.pl/2015/gdzie-scrum-nie-moze-tam-kanban-posle/), aby ograniczyć błędy związane z barierą językową.

Należy również sprawdzić [konkurencję](https://kanbantool.com/pl/), na której możesz się wzorować.


## Założenia

Na początku zawsze dobrze określić podstawowe wymagania dla [MVP](http://www.biznesowerewolucje.com/mvp-minimum-viable-product-praktycznie/). W naszym przypadku może to być:

- tablica z określonymi kolumnami i limitem zadań
- zadania z informacjami takimi jak:
    - nazwa zadania
    - aktualna kolumna
    - użytkownik (osoba odpowiedzialna)
- możliwość przemieszczania zadań.

### Przechowywanie danych

Na tym etapie chcemy wykorzystać najszybszą do implementacji możliwość zapisywania informacji o zadaniach. Dlatego wybór padł na [localStorage](http://kursjs.pl/kurs/storage/storage.php). W ten sposób będzie można testować rozwiązanie, nie przejmując się np. zewnętrzną bazą danych.

Pracę ułatwiłby Ci hook, który udostępniałby metody umożliwiające zapis i odczyt danych z localStorage, np.:
```
const [getItem, setItem] = useStorage('name');
```

Dodatkowo przy pierwszym uruchomieniu tablicy należałoby pobrać dane z localStorage i przekazać je do wnętrza aplikacji za pomocą Context API. Jeśli takich danych nie ma, to ustawiamy wartości początkowe.

Trzeba się też zastanowić nad strukturą zapisywanych danych.

Musimy przechowywać informacje o kolumnach: maksymalną liczbę zadań, nazwę czy identyfikator, np.:
```js
[
    {id: 1, name: 'Pending', limit: 4},
    {id: 2, name: 'Analysis - Doing', limit: 3},
    {id: 3, name: 'Analysis - Done', limit: 2},
    // ...
]
``` 

Podobną strukturę mogą mieć zadania:
```js
[
    {id: 1, name: 'Task1', idColumn: 1, user: 'Anna'},
    {id: 2, name: 'Task2', idColumn: 1, user: 'Anna'},
    {id: 3, name: 'Task3', idColumn: 1, user: 'Anna'},
    // ...
]
```

Ponieważ na początku staramy się maksymalnie wszystko uprosić, uznajemy, że `id` kolumn to kolejne liczby naturalne. Przemieszczenie zadań między kolumnami odbywa się przy pomocy dodania lub odjęcia cyfry 1 od aktualnej wartości `id` kolumny (`idColumn`).

### Komponenty

Już na tym etapie powinieneś być świadomy, jakich komponentów będziesz potrzebować.

Nasza tablica może być komponentem o nazwie `<Board />`. Tablica składa się z kolumn, więc będziemy potrzebować komponentu `<Column />`. W każdej kolumnie wyświetlane są zadania – do tego przyda się `<Task />`. Musimy mieć możliwość tworzenia zadań, dlatego bez komponentu `<Form />` również się nie obędzie.

## Kolejność działań

#### Utwórz strukturę i komunikację między komponentami
Najpierw utwórz strukturę danych wewnątrz Twojej aplikacji i za pomocą odpowiednich komponentów postaraj się wyświetlić wszystkie elementy. Dane możesz przechowywać w `state` w komponencie `<App />` i przekazywać je przez Context API. Pamiętaj, że w ten sposób możesz też przekazywać metody, które będą aktualizować dane w `state`.

#### Sprawdź działanie z localStorage
Zapisz dane w localStorage i sprawdź, czy nadal wszystko działa.

#### Zaimplementuj przesuwanie zadań między kolumnami
Gdy wszystko działa, wprowadź przemieszczanie zadań między kolumnami bez zapisywania danych w localStorage. Jak już mówiliśmy, wystarczy inkrementować lub dekrementować pole `idColumn`. Pamiętaj, aby sprawdzać, czy limit zadań w danej kolumnie nie został osiągnięty i czy kolumny następna oraz poprzednia istnieją.

#### Stwórz formularz
Teraz daj użytkownikowi możliwość tworzenia dodatkowych zadań przy pomocy formularza.

#### Uzupełnij zapisywanie danych w localStorage
Wprowadź aktualizację danych w localStorage. Zwróć uwagę, że każda zmiana `state` aplikacji powinna być zapisywana w localStorage.

&nbsp;
Do wykonania zadania możesz użyć [konfiguracji wykorzystującej ESLinta i Prettiera](https://github.com/devmentor-pl/react-helloworld-modern).


&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
