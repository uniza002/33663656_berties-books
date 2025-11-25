# Berties Books Website

Bertie's Books Page

Uses node.js with Express and EJS.

To install and run:

```npm install```
```node index.js```

## dotenv

To protect my database credentials, I've moved them from index.js into a .env file. This file can then be added to .gitignore to ensure the file is only stored and used locally, and not synced to Github or elsewhere online. 

## Access Control

I have restricted access to addbook.ejs to logged-in users to prevent random users from spamming the page with bogus book add requests. I haven't added this access control elsewhere as other pages don't have any sensitive information contained on them, such as as searching or viewing existing books.