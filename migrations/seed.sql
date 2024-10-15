
-- After executing a drizzle-kit push, you must execute this SQL
--Why?, because drizzle-kit doesn't support full text search
--And to seed the database
ALTER TABLE comments ADD FULLTEXT(comment);

ALTER TABLE forms ADD FULLTEXT(description);

ALTER TABLE questions ADD FULLTEXT(description);

ALTER TABLE questions ADD FULLTEXT(question);

INSERT INTO tags (tag) VALUES ('Animals'), ('Business'), ('Education'), ('Environment'), ('Finance'), ('Health'), ('History'), ('Literature'), ('Maths'), ('Science'), ('Sports'), ('Technology');

INSERT INTO form_tags (form_id, tag_id) VALUES (1, 1), (1, 3), (1, 5), (2, 2), (2, 4), (2, 6), (3, 3), (3, 7), (3, 9), (4, 4), (4, 8), (4, 10), (5, 5), (5, 11), (6, 6), (6, 12), (7, 1), (7, 7), (7, 9), (8, 2), (8, 8), (8, 10), (9, 3), (9, 11), (9, 12), (10, 4), (10, 6), (10, 9), (11, 5), (11, 7), (11, 10), (12, 6), (12, 12), (13, 1), (13, 4), (13, 8), (14, 2), (14, 5), (14, 11), (15, 3), (15, 7), (16, 4), (16, 9), (17, 1), (17, 6), (18, 2), (18, 8), (19, 3), (19, 10), (20, 4), (20, 12);
