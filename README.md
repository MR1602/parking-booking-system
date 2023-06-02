# Parking booking System
 A parking app together with a server that provides users an easy way of reserving space. A user should be able to park in 3 different areas and can book multiple parking spaces at the same time.

 ## Instructions

 Fork, then download or clone the repo.
```bash
git clone https://github.com/<your-user-name>/parking-booking-system.git
```
*Make sure MongoDB service is running.*

Create a *.env* file and your connection string as *CONNECTION_STRING*

For the **back-end**, install the dependencies once via the terminal.
```bash
npm install
```

and then to start it:
```bash
npm run start
```

Create a user by running *POST http://localhost:8000/api/register* with body:
```bash
{
    "email": "your-email",
    "password": "your-password"
}
```

For the **front-end**, install the dependencies once via the terminal.
```bash
cd ./client/
npm install
```

and then to start it:
```bash
npm start
```

Good luck :)

