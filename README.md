# 🗺️ AIR RACE APP

## 📦 Getting Started

```bash
pnpm install
pnpm dev
```

## 🧩 Key Highlights

Here I want to mention the way I was thinking when developing this code

- fisrt of all I created a list of subtasks for my self that was:

```
1 create a google map component (I prefered to use pnpm)
2 create a json mocked api (defined the types and basic sample data)
3 simulate filtering on backend (filtering sample data with category and title and desc)
4 randomly fail api calling (because I want to have state api error I add 20% api failing)
5 call api using react query (because I wanted to use caching and other good features of react query I imported it, also I could have optimistic update and exception handler and ...)
6 rendering isFetching and errors (as sometimes we will have api error, or isLoading, or empty list I showed proper messages)
7 creating filters for category and title (I added debouncing for the change filter when user is typing to prevent a lot of api calls)
8 adding debounce on title search
9 creating atom for filters (I prefer to use Jotai to bring me atomic design, so it will be much easier to debug and extend and maintain)
10 creating atom for clicked race and hovered race
11 showing selected markup on map (with proper icon, also customised for hover and clicked)
12 showing selected markup in list (with proper class for hovered and clicked)
13 creating folder structure for different modules (I prefer to have types fully separated, also for contexts and atoms another folder, same as for hooks and components, and definately for constants and helper methods too)
14 adding reset filters
15 Location Search (Optional/ Bonus) Allow entering a location (city / address) Center the map accordingly
```

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Google Maps API

---

## More thinkings

- I believe we should not hardcode the center of map, it has to be related to the events
- also for the zoom level of map we should calculate it based on device, and locations
- also for the states hovered and clicked race I belive we can bind them by having proper centralized methods for example, handleUnselectRace, and inside make clicked and hovered as null both
- I prefer always add prettier and eslint to project before start working on it
- also using huskey for hooks to pre commit and push to run tests will be nice
- also I see some challenges like considering we have a list of 100 items, then clicking on 1 item should scroll the list, it has to be done in real world case
- also 100% I think we need clusters, why? because consider we have 10 events very close on map that is overlapping each other, then in different zoom levels we should have clusters
- also for a real world project I think skills of the AI also mcbs should be shared inside project
- also we can have a code conversion to have same code principles in the project
- I skipped implementing city search via geocoding as it requires additional API setup and billing. Given that it was optional, I focused on the core functionality and kept the implementation lightweight.
