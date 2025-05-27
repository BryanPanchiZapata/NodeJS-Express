create table usersnew (
    id serial not null primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    created_at timestamp default CURRENT_TIMESTAMP
)