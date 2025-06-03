const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Initialize Supabase client
const supabaseUrl = 'https://tjexxveuyyzubzdkokxu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZXh4dmV1eXl6dWJ6ZGtva3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwODU1ODUsImV4cCI6MjA1OTY2MTU4NX0.DCqxsAdVBLwuC4G-4j4215ZJVCzVJkXqyNocqUIXLmM';
const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  try {
    // Read the SQL file
    const sqlPath = path.join(__dirname, 'migrations', 'create_profiles_table.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Execute the SQL
    const { error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('Error executing SQL:', error);
      return;
    }

    console.log('Database setup completed successfully!');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

setupDatabase(); 