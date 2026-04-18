USE labs_database;

CREATE PROCEDURE getID(
    IN p_username varchar(300),
    OUT p_id INT
)
BEGIN
    SELECT users.username_id
    INTO p_id
    FROM users
    WHERE username= p_username
    LIMIT 1;
END;


CREATE PROCEDURE signIn(
    IN p_username varchar(300),
    IN p_name varchar(100),
    IN p_password varchar(500)
)
BEGIN
    DECLARE id INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;

    INSERT INTO users(username, password, nombre, created_at)
    VALUES(p_username,p_password,p_name, NOW());

    CALL getID(p_username, id);

    INSERT INTO otorga(username_id, role_id)
        VALUES (id,2);

    COMMIT;
END;


CREATE PROCEDURE getLabel(
    IN p_label varchar(10)
)
BEGIN
    SELECT Q.question, Q.answer, Q.label
    FROM questions as Q
    WHERE label=p_label;
END;

