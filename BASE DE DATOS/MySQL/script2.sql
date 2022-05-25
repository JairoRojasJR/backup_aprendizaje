create table products (
	id int not null auto_increment,
    name varchar(50) not null,
    create_by int not null,
    marca varchar(50) not null,
    primary key (id),
    foreign key(create_by) references user(id)
);

rename table products to product;

insert into product (name,create_by,marca)
values
	('iphone','1','apple'),
    ('mac','2','apple'),
    ('ipad','1','apple'),
    ('ipod','1','apple');
    
select * from product;

select u.id, u.email, p.name from user u left join product p on u.id = p.create_by;
select u.id, u.email, p.name from user u right join product p on u.id = p.create_by;
select u.id, u.email, p.name from user u inner join product p on u.id = p.create_by;
select u.id, u.name, p.id, p.name from user u cross join product p;

select count(id), marca from product group by marca;

select count(p.id), u.name from product p left join user u
on u.id = p.create_by group by p.create_by
having count(p.id) >= 3;

drop table animales;
drop table product;
drop table user;