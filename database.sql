CREATE TABLE images (
	id serial primary key,
	pic varchar(255),
	image_description varchar(255),
	likes int
);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/Baby.png', 'The notion of having children is a real possiblity for me in the next year and that is very exciting', 0);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/BT.jpg', 'I play broomball!', 0);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/Cabin.jpg', 'It"s on a lake!', 0);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/DSJS.jpg', 'This is Jessica!', 0);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/HP2.jpg', 'My kids at state!', 0);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/Hunting.jpg', 'My dad and I tagging out!', 0);
