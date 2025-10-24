const express = require('express');
const app = express();
app.use(express.json());

function calculateAge(dob) {
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return null;
  const today = new Date();
  if (birth > today) return null; // future date invalid
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

app.post('/api/employee/age', (req, res) => {
  const { id, name, dob } = req.body;
  if (!id || !name || !dob) {
    return res.status(400).json({ error: 'id, name and dob are required' });
  }

  const age = calculateAge(dob);
  if (age === null || age < 0) {
    return res.status(400).json({ error: 'dob must be a valid past date (e.g. YYYY-MM-DD or ISO format)' });
  }

  return res.json({ id, name, dob, age });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Employee age API listening on port ${PORT}`);
});
