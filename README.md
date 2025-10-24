# Employee Age API

This tiny service provides one endpoint: POST /api/employee/age

It accepts JSON with fields:
- id (string or number)
- name (string)
- dob (date string — ISO / YYYY-MM-DD recommended)

and returns the calculated age in years.

Install and run:

```bash
npm install
npm start
```

Endpoint example:

Request:
```bash
curl -X POST http://localhost:3000/api/employee/age \
  -H "Content-Type: application/json" \
  -d '{"id":"123","name":"Alice","dob":"1990-07-25"}'
```

Response:
```json
{
  "id": "123",
  "name": "Alice",
  "dob": "1990-07-25",
  "age": 35
}
```

Behavior notes:
- DOB must be a parseable date and must be in the past. Future dates or invalid dates return 400.
- Missing id, name or dob returns 400.
- The age calculation accounts for month/day (i.e., birthday hasn't happened yet this year reduces age by 1).

If you'd like, I can:
- add input validation with a schema (e.g., using Joi),
- add TypeScript typings,
- add unit tests,
- or create and push these files into a new branch in your repository if you grant me repository write access.
