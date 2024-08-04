## ChapterCritics: Book Review App
<hr>

### What is ChapterCritics?
- **ChapterCritics**: is a book review sharing platform. With over 170,000 books in our database (dataset from kaggle), user's can review their favourite books out of 5, and share their thoughts with others. Unsure if you should read a new book? Find out what everyone has to say on ChapterCritics first and see how many stars the book has. Find new books with our most reviewed and highest rated reccomendations, or just read random reviews on our home page.
- **What I am most proud** of is the extensive dataset and the search functionality. The search box on the books page gives live sugguestions every time a new letter is typed in. Although it is a bit slow using the azure sql server. 

<hr>

### Azure Link
- App is deployed live to azure [here](https://chaptercritics.azurewebsites.net/) 

<hr>

### How to run app locally

- Ensure you have [docker installed](https://docs.docker.com/engine/install/)
- Open the app root directory in a terminal
- Ensure you have no docker images called backed or frontoned, run ```docker images```
- Ensure port 5220 & 3000 are unused
<hr>

#### Run Backend

##### 1. In a New Terminal Enter Backend
```
cd backend/backend
```
##### 2. Build Docker Image
```
docker build -t backend .
```
##### 3. Run Docker Container
```
docker run -p 5220:5220 backend
```

<hr>

#### Run Frontend
##### 1. In a New Terminal Enter Frontend
```
cd frontend
```
##### 2. Build Docker Image
```
docker build -t frontend .
```
##### 3. Run Docker Container
```
docker run -p 3000:3000 frontend
```
##### 3. Access Frontend
- [localhost:3000](http://localhost:3000/)
