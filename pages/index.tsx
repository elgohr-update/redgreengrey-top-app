import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, P, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(3);

    return (
        <>
            <Htag tag="h1">{rating}</Htag>
            <Button appearence="primary" arrow="right">
                button
            </Button>
            <Button appearence="primary" arrow="right">
                button
            </Button>
            <Button appearence="ghost" arrow="right">
                кнопка
            </Button>
            <P size="l">Большой</P>
            <P>Средний</P>
            <P size="s">Маленький</P>
            <Rating isEditable rating={rating} setRating={setRating} />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        {
            firstCategory,
        }
    );

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
