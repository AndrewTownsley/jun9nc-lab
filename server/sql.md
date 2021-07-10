To setup the example db locally, copy and paste the following into your MySQL Workbench:

```
CREATE SCHEMA codinghelp;

use codinghelp;

CREATE TABLE IF NOT EXISTS questions (
	QuestionID int auto_increment not null primary key,
    Question text not null,
    Answer text not null
);
```

Then execute the script!