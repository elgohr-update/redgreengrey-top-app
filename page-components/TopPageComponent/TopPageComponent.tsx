import { Advantages, HhData, Htag, P, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import React from "react";

export const TopPageComponent = ({
    page,
    products,
    firstСategory,
}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag color="grey" size="m">
                        {products.length}
                    </Tag>
                )}
                <span>Sorting</span>
            </div>
            <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">
                    hh.ru
                </Tag>
            </div>
            {firstСategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages}></Advantages>
                </>
            )}
            {page.seoText && <P>{page.seoText}</P>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map((t) => (
                <Tag key={t} color="primary">
                    {t}
                </Tag>
            ))}
        </div>
    );
};
