# The-News-Room

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning


<br>

### Overview

_**The-News-Room** is the only website you'll visit for your news needs! It updates and displays current news feeds from different websites all in one place._

<br>

### Wireframes

- Desktop

![alt text](https://i.imgur.com/hKU5gyb.png "The-News-Room Desktop Window")

- Mobile

![alt text](https://i.imgur.com/9mRo6i0.png "The-News-Room Mobile Window")


<br>

### MVP

_**The-News-Room** MVP consists of having an up-to-date API that displays current news._

<br>

#### Goals

- Locate and obtain working API with up-to-date news articles
- Build app in with a column-style structure
- Present articles in cascading style


<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Spring   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| NewsAPI |      yes      | _cnn.com_ | _https://www.cnn.com/2020/04/26/politics/us-election-2020-week-ahead/index.html_ |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Design/Basic Structure   |    M     |     3 hrs      |     2 hrs     |    2 hrs    |
| Locate API |    H     |     2 hrs      |     1 hrs     |     1 hrs     |
| Wireframing |   H     |    3 hrs   |   2 hrs   |   2 hrs   |
| Pseudocoding  |   M    |    4 hrs   |   TBD    |    TBD   |
| Design (CSS) |   H    |    4 hrs    |    TBD    |    TBD    |
| React Coding  |   H   |    6 hrs    |   TBD   |   TBD   |
| MVP   |   H   |   5 hrs   |   TBD    |    TBD   |
| Post MVP  |  M  |    4 hrs   |    TBD   |    TBD   |
| TOTAL               |          |     31 hrs      |     TBD     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP


- Implement Search function
- Include effects (hover, page, etc.)
- Include animation with new page load
- Save articles to a bookmark/reading list
- Have catagories such as specific websites and topics

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.