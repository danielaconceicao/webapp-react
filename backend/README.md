## Database 
* Table: `movies`
* Table: `reviews`

## Movies Table
* id | INT AUTO-INCREMENT PRIMARY KEY NOT NULL
* title | VARCHAR(60) NOT NULL
* director | VARCHAR(60) NOT NULL
* genre | VARCHAR(20) NOT NULL
* release_year | DATE NOT NULL
* abstract | TEXT(500) NOT NULL
* created_at | VARCHAR(60) NOT NULL 
* updared_at | VARCHAR(60) NOT NULL 

## Reviews Table
* id | INT AUTO-INCREMENT PRIMARY KEY NOT NULL
* movie_id 
* name | VARCHAR(60) NOT NULL
* vote | TINYINT
* text | TEXT(500)
* created_at | VARCHAR(60) NOT NULL 
* updated_at | VARCHAR(60) NOT NULL 