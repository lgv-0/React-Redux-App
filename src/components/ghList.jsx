import React from "react";
import { connect } from "react-redux";
import { getInfo } from "../actions/ghActions";
import GhCard from "./ghCard";

const GhList = props =>
{
    return (
        <div>
            <form onSubmit={(e)=>{e.preventDefault(); props.getInfo(e.target.githandle.value);}}>
                <input name="githandle" />
                <button type="submit">Get</button>
            </form>
            
            {
                props.lastError != "" ? <h3>{props.lastError}</h3> : null
            }

            {
                props.cards.map((i, index)=>
                {
                    return (<GhCard user={i} key={index} />)
                })
            }
        </div>
    );
};

const cbSetProps = state =>
{
  return (
    {
        cards: state.ghReducer.cards,
        lastError: state.ghReducer.lastError
    });
};

//Connect them, PropCB . Action . Component
export default connect(cbSetProps, { getInfo })(GhList);