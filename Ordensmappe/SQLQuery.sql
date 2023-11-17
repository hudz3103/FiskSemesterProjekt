/* Oprettelse af table: Der viser år og antal produceret */

CREATE TABLE annual_prod
(
    entity character varying,
    code character varying,
    year smallint,
    plastic_prod_ton bigint
);


/* Oprettelse af table: Det viser skrald per person i forskellige lande*/
CREATE TABLE public.plastic_pollution
(
    entity character varying(150),
    code character varying(10),
    year smallint,
    mismanaged numeric
);



