USE labs_database;

CREATE TRIGGER newUser
    AFTER
    INSERT ON users
    FOR EACH ROW
    BEGIN
       INSERT INTO record(action_id, name, created_at)
           VALUES (1, CONCAT('New user account created: ',NEW.username), NOW());
    END;

CREATE TRIGGER newQuestion
    AFTER
    INSERT ON questions
    FOR EACH ROW
    BEGIN
       INSERT INTO record(action_id,username_id, name, created_at)
           VALUES (2, NEW.username_id,CONCAT('New question created: ',NEW.question), NOW());
    END;


CREATE TRIGGER editedQuestion
    AFTER
    UPDATE ON questions
    FOR EACH ROW
    BEGIN
       INSERT INTO record(action_id,username_id, name, created_at)
           VALUES (4, OLD.username_id,CONCAT('Question edited: ',OLD.question), NOW());
    END;

CREATE TRIGGER deleteQuestion
    AFTER
    DELETE ON questions
    FOR EACH ROW
    BEGIN
       INSERT INTO record(action_id,username_id, name, created_at)
           VALUES (3, OLD.username_id,CONCAT('Question deleted: ',OLD.question), NOW());
    END;