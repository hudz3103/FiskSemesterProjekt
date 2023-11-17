toc.dat                                                                                             0000600 0004000 0002000 00000003550 14525632225 0014450 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           &    
        
    {            plastic    15.4    15.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    17158    plastic    DATABASE     {   CREATE DATABASE plastic WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Danish_Denmark.1252';
    DROP DATABASE plastic;
                postgres    false         �            1259    17159    annual_prod    TABLE     �   CREATE TABLE public.annual_prod (
    entity character varying,
    code character varying,
    year smallint,
    plastic_prod_ton bigint
);
    DROP TABLE public.annual_prod;
       public         heap    postgres    false         �            1259    17164    plastic_pollution    TABLE     �   CREATE TABLE public.plastic_pollution (
    entity character varying(150),
    code character varying(10),
    year smallint,
    mismanaged numeric
);
 %   DROP TABLE public.plastic_pollution;
       public         heap    postgres    false         �          0    17159    annual_prod 
   TABLE DATA           K   COPY public.annual_prod (entity, code, year, plastic_prod_ton) FROM stdin;
    public          postgres    false    214       3318.dat �          0    17164    plastic_pollution 
   TABLE DATA           K   COPY public.plastic_pollution (entity, code, year, mismanaged) FROM stdin;
    public          postgres    false    215       3319.dat                                                                                                                                                        3318.dat                                                                                            0000600 0004000 0002000 00000003753 14525632225 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        World	OWID_WRL	1950	2000000
World	OWID_WRL	1951	2000000
World	OWID_WRL	1952	2000000
World	OWID_WRL	1953	3000000
World	OWID_WRL	1954	3000000
World	OWID_WRL	1955	4000000
World	OWID_WRL	1956	5000000
World	OWID_WRL	1957	5000000
World	OWID_WRL	1958	6000000
World	OWID_WRL	1959	7000000
World	OWID_WRL	1960	8000000
World	OWID_WRL	1961	9000000
World	OWID_WRL	1962	11000000
World	OWID_WRL	1963	13000000
World	OWID_WRL	1964	15000000
World	OWID_WRL	1965	17000000
World	OWID_WRL	1966	20000000
World	OWID_WRL	1967	23000000
World	OWID_WRL	1968	27000000
World	OWID_WRL	1969	32000000
World	OWID_WRL	1970	35000000
World	OWID_WRL	1971	38000000
World	OWID_WRL	1972	44000000
World	OWID_WRL	1973	51000000
World	OWID_WRL	1975	46000000
World	OWID_WRL	1976	54000000
World	OWID_WRL	1977	59000000
World	OWID_WRL	1978	64000000
World	OWID_WRL	1979	71000000
World	OWID_WRL	1980	70000000
World	OWID_WRL	1981	72000000
World	OWID_WRL	1982	73000000
World	OWID_WRL	1983	80000000
World	OWID_WRL	1984	86000000
World	OWID_WRL	1985	90000000
World	OWID_WRL	1986	96000000
World	OWID_WRL	1987	104000000
World	OWID_WRL	1988	110000000
World	OWID_WRL	1989	114000000
World	OWID_WRL	1990	120000000
World	OWID_WRL	1991	124000000
World	OWID_WRL	1992	132000000
World	OWID_WRL	1993	137000000
World	OWID_WRL	1994	151000000
World	OWID_WRL	1995	156000000
World	OWID_WRL	1996	168000000
World	OWID_WRL	1997	180000000
World	OWID_WRL	1998	188000000
World	OWID_WRL	1999	202000000
World	OWID_WRL	2000	213000000
World	OWID_WRL	2001	218000000
World	OWID_WRL	2002	231000000
World	OWID_WRL	2003	241000000
World	OWID_WRL	2004	256000000
World	OWID_WRL	2005	263000000
World	OWID_WRL	2006	280000000
World	OWID_WRL	2007	295000000
World	OWID_WRL	2008	281000000
World	OWID_WRL	2009	288000000
World	OWID_WRL	2010	313000000
World	OWID_WRL	2011	325000000
World	OWID_WRL	2012	338000000
World	OWID_WRL	2013	352000000
World	OWID_WRL	2014	367000000
World	OWID_WRL	2015	381000000
World	OWID_WRL	2016	400050000
World	OWID_WRL	2017	420052500
World	OWID_WRL	2018	441055140
World	OWID_WRL	2019	459746020
\.


                     3319.dat                                                                                            0000600 0004000 0002000 00000011274 14525632225 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Africa	\N	2019	0.059822761
Albania	ALB	2019	0.543214162
Algeria	DZA	2019	0.134113767
Angola	AGO	2019	0.027022781
Antigua and Barbuda	ATG	2019	0.020618557
Argentina	ARG	2019	0.09238293
Asia	\N	2019	0.172404698
Australia	AUS	2019	0.00126969
Bahamas	BHS	2019	0.051413882
Bahrain	BHR	2019	0
Bangladesh	BGD	2019	0.151122996
Barbados	BRB	2019	0.156794425
Belgium	BEL	2019	0.002946529
Belize	BLZ	2019	0.958974359
Benin	BEN	2019	0.138886535
Bosnia and Herzegovina	BIH	2019	0.001817631
Brazil	BRA	2019	0.179099739
Brunei	BRN	2019	0.309468822
Bulgaria	BGR	2019	0.001
Burkina Faso	BFA	2019	0
Cambodia	KHM	2019	0.067507733
Cameroon	CMR	2019	0.412389859
Canada	CAN	2019	0.006361765
Cape Verde	CPV	2019	0
Chile	CHL	2019	0.016990291
China	CHN	2019	0.049314957
Colombia	COL	2019	0.00856195
Comoros	COM	2019	0
Congo	COG	2019	0.125627207
Costa Rica	CRI	2019	0.089144216
Cote d'Ivoire	CIV	2019	0.186024808
Croatia	HRV	2019	0.054237288
Cyprus	CYP	2019	0.002502085
Democratic Republic of Congo	COD	2019	0.004839211
Denmark	DNK	2019	0.001559252
Djibouti	DJI	2019	0.004106776
Dominica	DMA	2019	0.736111111
Dominican Republic	DOM	2019	0.584411956
East Timor	TLS	2019	0.552977572
Ecuador	ECU	2019	0.065385058
Egypt	EGY	2019	0.024614496
El Salvador	SLV	2019	0.125193678
Equatorial Guinea	GNQ	2019	0.298672566
Eritrea	ERI	2019	0.013726051
Estonia	EST	2019	0.009049774
Europe	\N	2019	0.007805317
Fiji	FJI	2019	0.41011236
Finland	FIN	2019	0
France	FRA	2019	0.003608168
French Guiana	GUF	2019	0.024054983
Gabon	GAB	2019	0.20478601
Gambia	GMB	2019	0.179301533
Georgia	GEO	2019	0.000750563
Germany	DEU	2019	0.001604464
Ghana	GHA	2019	0.13758301
Greece	GRC	2019	0.020624463
Grenada	GRD	2019	1.160714286
Guadeloupe	GLP	2019	0.01
Guatemala	GTM	2019	0.406234003
Guinea	GIN	2019	0.183775742
Guinea-Bissau	GNB	2019	0.128578865
Guyana	GUY	2019	1.591315453
Haiti	HTI	2019	0.615200213
Honduras	HND	2019	0.249948697
Hong Kong	HKG	2019	0.015061861
Iceland	ISL	2019	0
India	IND	2019	0.092587331
Indonesia	IDN	2019	0.208158135
Iran	IRN	2019	0.01119232
Iraq	IRQ	2019	0.001704401
Ireland	IRL	2019	0.02355592
Israel	ISR	2019	0.003873694
Italy	ITA	2019	0.006837325
Jamaica	JAM	2019	0.791723202
Japan	JPN	2019	0.014464764
Jordan	JOR	2019	0.000099
Kazakhstan	KAZ	2019	0.000700771
Kenya	KEN	2019	0.004926389
Kiribati	KIR	2019	0
Kuwait	KWT	2019	0.001663894
Latvia	LVA	2019	0.004719455
Lebanon	LBN	2019	0.099766628
Lesotho	LSO	2019	0
Liberia	LBR	2019	0.534332591
Libya	LBY	2019	0.129703409
Lithuania	LTU	2019	0.002536232
Madagascar	MDG	2019	0.028736698
Malaysia	MYS	2019	2.287887324
Maldives	MDV	2019	0
Malta	MLT	2019	0
Marshall Islands	MHL	2019	0
Martinique	MTQ	2019	0.058510638
Mauritania	MRT	2019	0.028060097
Mauritius	MUS	2019	0
Mexico	MEX	2019	0.027528689
Monaco	MCO	2019	0
Montenegro	MNE	2019	0
Morocco	MAR	2019	0.049352928
Mozambique	MOZ	2019	0.08377791
Myanmar	MMR	2019	0.047071885
Namibia	NAM	2019	0.000801603
Netherlands	NLD	2019	0.015850734
New Zealand	NZL	2019	0.014217019
Nicaragua	NIC	2019	0.223800794
Nigeria	NGA	2019	0.092752931
North America	\N	2019	0.120204257
North Korea	PRK	2019	0.001948103
Norway	NOR	2019	0
Oceania	\N	2019	0.086189708
Oman	OMN	2019	0.000201005
Pakistan	PAK	2019	0.004031122
Palau	PLW	2019	0.388888889
Palestine	PSE	2019	0.023690022
Panama	PAN	2019	1.233396138
Papua New Guinea	PNG	2019	0.348564266
Peru	PER	2019	0.007966779
Philippines	PHL	2019	3.296160641
Poland	POL	2019	0.000765414
Portugal	PRT	2019	0.007432036
Puerto Rico	PRI	2019	0.024207296
Qatar	QAT	2019	0
Reunion	REU	2019	0
Romania	ROU	2019	0.004131164
Russia	RUS	2019	0.003715586
Saint Kitts and Nevis	KNA	2019	0.018867925
Saint Lucia	LCA	2019	2.453551913
Saint Vincent and the Grenadines	VCT	2019	0.72972973
Samoa	WSM	2019	0
Sao Tome and Principe	STP	2019	0.358139535
Saudi Arabia	SAU	2019	0.0000875
Senegal	SEN	2019	0.010370643
Seychelles	SYC	2019	0
Sierra Leone	SLE	2019	0.463842314
Singapore	SGP	2019	0.028256375
Slovakia	SVK	2019	0
Slovenia	SVN	2019	0.005291005
Solomon Islands	SLB	2019	0.149253731
Somalia	SOM	2019	0.000129509
South Africa	ZAF	2019	0.072850849
South Korea	KOR	2019	0.007554905
Spain	ESP	2019	0.005028136
Sri Lanka	LKA	2019	0.452729319
Sudan	SDN	2019	0.002475883
Suriname	SUR	2019	2.886402754
Sweden	SWE	2019	0.003587086
Syria	SYR	2019	0.002577622
Taiwan	TWN	2019	0.022335324
Tanzania	TZA	2019	0.099732782
Thailand	THA	2019	0.327550053
Togo	TGO	2019	0.053947043
Tonga	TON	2019	0
Trinidad and Tobago	TTO	2019	2.549820789
Tunisia	TUN	2019	0.058828559
Turkey	TUR	2019	0.171748771
Ukraine	UKR	2019	0.01952539
United Arab Emirates	ARE	2019	0.001432811
United Kingdom	GBR	2019	0.010410188
United States	USA	2019	0.007387598
Uruguay	URY	2019	0.288272675
Venezuela	VEN	2019	0.209987376
Vietnam	VNM	2019	0.292560801
Western Sahara	ESH	2019	0.065292096
World	OWID_WRL	2019	0.126980239
Yemen	YEM	2019	0.008641383
Zimbabwe	ZWE	2019	0
\.


                                                                                                                                                                                                                                                                                                                                    restore.sql                                                                                         0000600 0004000 0002000 00000004263 14525632225 0015377 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE plastic;
--
-- Name: plastic; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE plastic WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Danish_Denmark.1252';


\connect plastic

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: annual_prod; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.annual_prod (
    entity character varying,
    code character varying,
    year smallint,
    plastic_prod_ton bigint
);


--
-- Name: plastic_pollution; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plastic_pollution (
    entity character varying(150),
    code character varying(10),
    year smallint,
    mismanaged numeric
);


--
-- Data for Name: annual_prod; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.annual_prod (entity, code, year, plastic_prod_ton) FROM stdin;
\.
COPY public.annual_prod (entity, code, year, plastic_prod_ton) FROM '$$PATH$$/3318.dat';

--
-- Data for Name: plastic_pollution; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.plastic_pollution (entity, code, year, mismanaged) FROM stdin;
\.
COPY public.plastic_pollution (entity, code, year, mismanaged) FROM '$$PATH$$/3319.dat';

--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             