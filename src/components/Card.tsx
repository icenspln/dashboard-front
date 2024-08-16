import { ReactElement } from "react";
import ButtonRoundedPrimary from "./ButtonRoundedPrimary";
import { Link } from "react-router-dom";

type CardType = {
  children?: ReactElement<any, any>;
  textHeader: string;
  textParagraph: string;
  textButtonPrimary?: string;
  textButtonSecondary?: string;
};

export function Card({
  children,
  textHeader,
  textParagraph,
  textButtonPrimary,
  textButtonSecondary,
}: CardType) {
  return (
    <article className="flex flex-col gap-1 items-center h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
      <h2 className="text-lg text-center mb-3 font-bold text-blueDark">
        {textHeader}
      </h2>
      <p className="w-full text- text-textGray2 text-center ">
        {textParagraph}
      </p>
      {children && <div className="my-auto">{children}</div>}
      {textButtonPrimary && (
        <Link
          to={`/studentmanagement`}
          className="w-[60%] flex justify-center items-center"
        >
          <ButtonRoundedPrimary text={textButtonPrimary} />
        </Link>
      )}
      {textButtonSecondary && (
        <div className="my-3">
          <a href="" className="text-blue underline">
            {textButtonSecondary}
          </a>
        </div>
      )}
    </article>
  );
}
