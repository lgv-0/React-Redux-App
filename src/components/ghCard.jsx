import React from "react";
import styled from "styled-components";

export default function GhCard(props)
{
    return (
        <Card>
            <img src={props.user.img} alt="ProfilePic" />
            <h4>{props.user.name}, {props.user.username}</h4>
        </Card>
    );
}

let Card = styled.div`
    img
    {
        width: 150px;
        height: 150px;
    }
`;