steps to starting the application
 - run `npm i`
 - add the values in the `.env.example` in a `.env` file
 - run `npm run start:dev`

endpoints available


- Get all reminders: GET  /reminders
- Create a reminder: POST /reminders
- Get all reminders with queries: GET  /reminders?user=value & after=value
- Get single reminder: GET /reminders/:id
- All other methods to /reminders/:id is invalid