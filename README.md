# vue-firebase-boilerplate

## Project setup
```
npm install
```

### Create a project in firebase and open a new firestore database.

*Optional* add these rules (everyone can read, logged users can write)

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth.uid != null
    }
  }
}
```

### Turn on email + password login in authentication

### Go to firebase.js and add your firebase keys

Don't worry about having these keys on the front end. They are perfectly safe to have on the front end. Security must be configured from the firebase console.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
