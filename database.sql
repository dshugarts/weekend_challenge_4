CREATE TABLE images (
    id serial primary key,
    pic varchar(255),
    image_description varchar(255),
    likes int,
    views int
);

INSERT INTO images (pic, image_description, likes, views)
VALUES ('/assets/Baby.png', 'I have always loved food!', 0 ,0);

INSERT INTO images (pic, image_description, likes, views)
VALUES ('/assets/BT.jpg', 'I play competitive broomball for the #1 ranked team in the country!', 0, 0);

INSERT INTO images (pic, image_description, likes, views)
VALUES ('/assets/Cabin.jpg', 'I have a cabin on a lake!', 0 ,0);

INSERT INTO images (pic, image_description, likes, views)
VALUES ('/assets/DSJS.jpg', 'My girlfriend and I live together in St. Louis Park', 0, 0);

INSERT INTO images (pic, image_description, likes, views)
VALUES ('/assets/HP2.jpg', 'The elite juniors I coach at the state tennis banquet!', 0, 0);

INSERT INTO images (pic, image_description, likes, views)
VALUES ('/assets/Hunting.jpg', 'My dad and I at the end of deer hunting!', 0, 0);
