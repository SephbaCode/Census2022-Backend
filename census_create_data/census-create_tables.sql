create table public.cantons
(
    id        integer generated always as identity
        primary key,
    canton_id integer not null
        constraint id_canton_unique
            unique,
    name      text    not null
);

alter table public.cantons
    owner to postgres;

create table public.types
(
    id          integer generated always as identity
        constraint housing_types_pkey
            primary key,
    description text not null,
    code        varchar
        constraint codde_unique
            unique
);

alter table public.types
    owner to postgres;

create table public.materials
(
    id          integer generated always as identity
        primary key,
    description text    not null,
    code        varchar not null
        constraint code
            unique
);

alter table public.materials
    owner to postgres;

create table public.conditions
(
    id          integer generated always as identity
        primary key,
    description text not null,
    code        varchar
);

alter table public.conditions
    owner to postgres;

create table public.census
(
    province_i01        varchar,
    canton_i02          varchar,
    n_house             varchar,
    roof_condition      integer
        constraint roof_condition_fk
            references public.conditions,
    wall_condition      integer
        constraint wall_condition_fk
            references public.conditions,
    floor_condition     integer
        constraint floor_condition_fk
            references public.conditions,
    rooms_count         integer,
    housing_amount      integer,
    aur                 integer,
    canton              integer
        constraint canton_fk
            references public.cantons (canton_id),
    id_viv              varchar,
    totfall             integer,
    totemi              integer,
    totper              integer,
    def_hab             integer,
    imp_vopa            integer,
    ocupation_type      varchar
        constraint ocupation_type_fk
            references public.types (code),
    id                  integer default nextval('registro_censo_id_seq'::regclass) not null
        constraint registro_censo_pkey
            primary key,
    road_type           varchar
        constraint road_type_fk
            references public.types (code),
    housing_type        varchar
        constraint housing_type_fk
            references public.types (code),
    roof_material       varchar
        constraint roof_material_fk
            references public.materials (code),
    wall_material       varchar
        constraint wall_material_fk
            references public.materials (code),
    floor_material      varchar
        constraint floor_material_fk
            references public.materials (code),
    water_supply_type   varchar
        constraint water_supply_type_fk
            references public.types (code),
    water_source_type   varchar
        constraint water_source_type_fk
            references public.types (code),
    sanitation_type     varchar
        constraint sanitation_type_fk
            references public.types (code),
    has_electricity     boolean,
    alt_elec_src_type   varchar
        constraint alt_elec_src_type_fk
            references public.types (code),
    waste_disposal_type varchar
        constraint waste_disposal_type_fk
            references public.types (code),
    common_pot          boolean
);

alter table public.census
    owner to postgres;

