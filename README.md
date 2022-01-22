# Arctics-Web-Frontend

This is the frontent develop repository of `arctics-web-app`
For our website, please visit [Arctics](https://www.arctics.academy)

```
Folders structure
src
 ├─Consultant
 │  └─Home
 │      ├─Components
 │      ├─Container
 │      └─img
 ├─LandingPage
 |   ├─Components
 |   ├─Containers
 |   └─img
 ├─GlobalComponents
 │  └─img
 └─fonts
```

## Demo run

1. `yarn install` / `npm install`
2. `yarn start` / `npm run start`

## `/GlobalComponents`

- Contents:
    - Nav.js
    - NavMobile.js
    - Foot.js
    - responsive.css
    - style.css

## `ContextReducer.js`

- For global variable usage
- To access global variable
    ```javascript=
    import { ParamContext } from 'ContextReducer.js'
    import { useContext } from 'react'

    const context = useContext(ParamContext)

    /* Usage
    context.Info => package of global variables
    context.isLogin => login status
    */
    ```
- To set/change global variable
    ```javascript=
    context.setInfo(object)
    context.setLogin(boolean)
    /* object format
    {
        type: action type,
        payload: {
            contents to change
        }
    }
    */
    ```