CREATE TABLE Users (
    email VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100),
    UNIQUE(email)
);

CREATE TABLE Messages (
   	messageID SERIAL PRIMARY KEY,
	messageUser TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    emailUser VARCHAR(100),
    FOREIGN KEY (emailUser) REFERENCES Users(email)
);