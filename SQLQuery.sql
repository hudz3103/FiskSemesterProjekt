/* INFORMATION OM DATABASE
NICE TRY
SERVER:
ella.db.elephantsql.com (ella-01)
---------------------------------
User&Default database:
xlbhzbfg
---------------------------------
Password:
C930ISwG6S2oVNB0JWq5tzqMxGytTJys


URL:
postgres://xlbhzbfg:C930ISwG6S2oVNB0JWq5tzqMxGytTJys@ella.db.elephantsql.com/xlbhzbfg

*/




/* Oprettelse af table: Der viser år og antal produceret */
CREATE TABLE annual_prod
(
    entity character varying,
    code character varying,
    year smallint,
    plastic_prod_ton bigint
);


/* Oprettelse af table: Det viser skrald per person i forskellige lande*/
CREATE TABLE plastic_pollution
(
    entity character varying(150),
    code character varying(10),
    year smallint,
    mismanaged numeric
);

/*Laver en ny colonne til de afrundede tal*/
ALTER TABLE plastic_pollution
ADD COLUMN rounded_mismanaged numeric;

/*Også til vis2 */
UPDATE plastic_pollution
SET rounded_mismanaged = ROUND(mismanaged, 3);



/*Vi tjekker hvordan det ville se ud før vi ændre data */
SELECT plastic_prod_ton/1000000 FROM annual_prod;

/*Vi lave en ny colonne til den scaleret værdi*/
ALTER TABLE annual_prod
ADD COLUMN scaled_prod_ton numeric;

/*Også til vis2 */
UPDATE annual_prod
SET scaled_prod_ton = (plastic_prod_ton / 1000000);

/*Slettet World fra databasen */
DELETE FROM plastic_pollution
WHERE (entity = 'World') 




