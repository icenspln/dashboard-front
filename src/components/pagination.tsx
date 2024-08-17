import { Dispatch, SetStateAction } from "react";
import ButtonPrimary from "./ButtonPrimary";

type PaginationProps = {
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export function Pagination({ totalPages, page, setPage }: PaginationProps) {
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <div className="w-full text-center my-4">
        <h4 className="text-blueDark mb-2">
          الصفحة {page} من {totalPages}
        </h4>
        <div className="flex justify-center items-center gap-4 max-w-sm mx-auto">
          <ButtonPrimary
            disabled={page == 1}
            text="الصفحة السابقة"
            onClick={prevPage}
          />
          <ButtonPrimary
            disabled={page >= totalPages}
            active
            text="الصفحة القادمة"
            onClick={nextPage}
          />
        </div>
      </div>
    </>
  );
}
