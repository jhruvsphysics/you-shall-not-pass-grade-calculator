# you-shall-not-pass-grade-calculator
## Intro
It tracks your Courses.

## Running it in your local environment:

- First, fork it to your Github account, then clone it to your local virtual environment. If you would like to use a command line using Github CLI, run:

(you may want to authenticate yourself first)

```gh auth login --web```

Fork:

```gh repo fork https://github.com/jhruvsphysics/you-shall-not-pass-grade-calculator --clone```

- Then, go into the project folder named ```/you-shall-not-pass-grade-calculator```

- Install dependencies:

```npm install```

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`

---

- Finally, run:

```npm start```

- You should be able to use the app locally!

## To update, simply run:

```git pull upstream main```
