import React from "react";
import { useDispatch } from "react-redux";
import Content from "./content";
import Header from "./Header";
import "./volunteer.css";
import {
  resetDateAllForm,
  resetCollectFromReducer,
  setDataToDefaultForAllSection,
} from "../../actions/getAllFormToReucer.action";

export default function MainVolunteer() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(resetDateAllForm())
    dispatch(resetCollectFromReducer())
    dispatch(setDataToDefaultForAllSection())
  }, [])
  return (
    <React.Fragment>
      <div>
        <Header />
        <Content />
      </div>
    </React.Fragment>
  );
}
