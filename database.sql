CREATE TABLE images (
	id serial primary key,
	pic varchar(255),
	image_description varchar(255),
	likes int
);

INSERT INTO images (pic, image_description, likes)
VALUES ('/assets/Baby.jpg', 'The notion of having children is a real possiblity for me in the next year and that is very exciting', 0);
