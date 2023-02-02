import React from "react";

interface IProps {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

const List = ({people}: IProps) => {
    return (
        <div>
            Simple List
            <li>{people.map(person => (
                <h1>{person.name}</h1>
            ))}</li>
        </div>
    )
}

export default List;