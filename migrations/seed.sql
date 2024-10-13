
-- After executing a drizzle-kit push, you must execute this SQL
--Why?, because drizzle-kit doesn't support full text search
--And to seed the database
ALTER TABLE comments ADD FULLTEXT(comment);

ALTER TABLE forms ADD FULLTEXT(description);

ALTER TABLE questions ADD FULLTEXT(description);

ALTER TABLE questions ADD FULLTEXT(question);

INSERT INTO tags (tag) VALUES ('Animals'), ('Business'), ('Education'), ('Environment'), ('Finance'), ('Health'), ('History'), ('Literature'), ('Maths'), ('Science'), ('Sports'), ('Technology');
