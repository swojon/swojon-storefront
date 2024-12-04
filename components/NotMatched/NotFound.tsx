import React from "react";
import "./not-found.css";
import NotMatched from "@/components/NotMatched/NotMatched";

interface Props {
  title:string;
  subtitle?:string;
  cta?: {
    text: string, 
    link: string
  },
  imagePath?:string
}

const NotFound = ({title, subtitle, cta, imagePath}: Props) => {
  return (
    <section className="flex flex-col justify-center items-center custom-container page-height">
      <NotMatched title={title} subtitle={subtitle} cta={cta} imagePath={imagePath}/>
    </section>
  );
};

export default NotFound;
