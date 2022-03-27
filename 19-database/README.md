# Database

- "A database is an organized collection of data, generally stored and accessed electronically from a computer system."

## Flat-File Database

- Plain file with rows of records (csv)

##### PROS:

- simple data

##### CONS:

- inflexible
- inefficient
- poor performance

## Database Management System (DBMS)

- Software package to define, create, maintain, and control access to the database

##### PROS:

- Optimised for data storage & retrieval
- handles complex data
- concurrent access
- data security

##### CONS:

- complex itself

### 2 Types of DBMS

- Slove different problems
- Different advantages and limitations

#### SQL (Structured Query Language)

- Designed for managing data in relational databases (Relational / RDBMS)
- SQL Database is an organized collection of one or more `tables` of `rows` and `columns`.
- `Data integrity` is the maintenance of, and the assurance of, data accuracy and consistency over its entire life-cycle.
- Each `column` has data type
- `Primary Key` and `Foreign Key`

##### SQL Query

- SELECT \* FROM Users WHERE name LIKE '%Bob%'

| id  | name | email           | age |
| --- | ---- | --------------- | --- |
| 1   | John | john@doe.com    | 34  |
| 2   | Bob  | bob@exmaple.com | 27  |
| 3   | Jane | jane@air.io     | 21  |

#### NoSQL

- Key-value
- Document
- Wide-column
- Graph
