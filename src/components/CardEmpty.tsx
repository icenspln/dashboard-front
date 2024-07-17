import { ReactElement } from "react";

type CardEmptyType = {
  children?: ReactElement<any, any>;
};

export function CardEmpty({ children }: CardEmptyType) {
  return (
    <article className="flex flex-col gap-1 items-center h-[435px] w-[391px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-[20px] py-[27px] rounded-3xl">
      {children}
    </article>
  );
}
