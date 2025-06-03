const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Save user data from Login2 page
router.post('/details', async (req, res) => {
  const { age, gender, city, state } = req.body;

  const { data, error } = await supabase
    .from('user_details')
    .insert([{ age, gender, city, state }]);

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({ message: 'User details saved!', data });
});

// Save user preferences
router.post('/preferences', async (req, res) => {
  const { user_id, preferences } = req.body;

  const { data, error } = await supabase
    .from('preferences')
    .insert([{ user_id, preferences }]);

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({ message: 'Preferences saved!', data });
});

module.exports = router;
