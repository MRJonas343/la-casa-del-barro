
-- After executing a drizzle-kit push, you must execute this SQL
--Why?, because drizzle-kit doesn't support full text search
ALTER TABLE comments ADD FULLTEXT(comment);

ALTER TABLE forms ADD FULLTEXT(description);

ALTER TABLE questions ADD FULLTEXT(description);

ALTER TABLE questions ADD FULLTEXT(question);
