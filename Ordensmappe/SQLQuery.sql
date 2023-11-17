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





/* ElephantSQL Notes:
Location:
dumbo.db.elephantsql.com
-----------------------

User&Default Database:
ctvnplha
----------------------
Password:
DmEPGhVV8wWvATHYsi8aPaKGEr9PX3LZ





*/



