import React from "react";
import "./not-found.css";
import NotMatched from "@/components/NotMatched/NotMatched";

interface Props {
  title:string;
  subtitle?:string;
  cta?: {
    text: string, 
    link: string
  }
}

const NotFound = ({title, subtitle, cta}: Props) => {
  return (
    <section className="flex flex-col justify-center items-center custom-container page-height">
      <NotMatched title={title} subtitle={subtitle} cta={cta}/>
    </section>
  );
};

export default NotFound;
