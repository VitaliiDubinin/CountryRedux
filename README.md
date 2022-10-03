# That project made during an education.

that is clone of my CountryApp, refactoring to Redux

it deploys https://countryapphvd.herokuapp.com

- git clone https://github.com/VitaliiDubinin/CountryRedux.git
- cd CountryRedux
- npm install
- npm start

### Please take into accout, that project has not finished yet, I'm trying to conbine different features. It works for assignment. All main function work: countries, favorites, singlecard page. and some extras. For doing little bit easy to read a code - see the files with .jsx extensions in "components" folder.

## my memo: add React and Toolkit

npm install redux react-redux
npm install @reduxjs/toolkit
npm i axios
heroku login  
heroku git:remote -a countryapphvd
git push heroku master:main
heroku buildpacks:set mars/create-react-app
heroku stack:set heroku-20
