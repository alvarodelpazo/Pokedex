import React from "react";
import styled from "styled-components";
import { spacing } from "../styles/settings/spacing";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card/Card";
import { rem } from "polished";
import { useEffect, useState } from "react";
import { getPokemonList } from "../core/pokemon.service";
import PaginationButton from "../components/PaginationButton";
import { Link } from "react-router-dom";

function PokemonList() {
    const [pokeData, setPokeData] = useState([]);
    const [reservedData, setReservedData] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);

    useEffect(() => {
      getPokemonList('https://pokeapi.co/api/v2/pokemon/?limit=20').then((data) => {
        setPokeData(data);
        setReservedData(data);
      });
    }, []);

    useEffect(() => {
        setPokeData(reservedData.filter((pokemon) => {
            return pokemon.name.includes(search);
        }));
    }, [search]);

    useEffect(() => {
        if(page < 0) {
            getPokemonList('https://pokeapi.co/api/v2/pokemon/?limit=20').then((data) => {
            setPokeData(data);
            setReservedData(data);
            });
        } else {
            getPokemonList('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+ page * 20).then((data) => {
                setPokeData(data);
                setReservedData(data);
            });
        }
        window.scrollTo(0,0);
    }, [page]);

    return (
        <>
            <SearchBarArea>
                <SearchBar search={ search } setSearch={ setSearch } />
            </SearchBarArea>
            <CardWrapper>
                {pokeData.map((pokemon) => {
                    let types = [];
                    pokemon.types.map((type) => {
                        types.push(type.type.name);
                        return types;
                    });
                    return (
                        <Link to="/data">
                            <Card key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.sprites.front_default} types={types} backgroundColor={types[0]}
                                height={pokemon.height} weight={pokemon.weight} />
                        </Link>
                    );
                })}
            </CardWrapper>
            <ButtonArea>
                <PaginationButton content={ "Previous page" } setPage={ setPage } page={ page } direction={"next"}></PaginationButton>
                <PaginationButton content={ "Next page" } setPage={ setPage } page={ page } direction={"previous"}></PaginationButton>
            </ButtonArea>
        </>
    );
}

const SearchBarArea = styled.div`
    margin: ${rem(spacing.large)} 126px ${rem(spacing.large)} 126px;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-basis: 100%;
    gap: ${rem(spacing.base)};
    margin-bottom: ${rem(spacing.large)};
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${rem(spacing.large)};
`;

export default PokemonList;