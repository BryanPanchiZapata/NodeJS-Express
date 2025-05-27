CREATE TABLE IF NOT EXISTS usersnew (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usersnew (name, email) VALUES ('Bryan', 'bryan@example.com') ON CONFLICT DO NOTHING;
INSERT INTO usersnew (name, email) VALUES ('Ana', 'ana@example.com') ON CONFLICT DO NOTHING;
