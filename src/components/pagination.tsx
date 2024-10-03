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
                    Page {page} of {totalPages}
                </h4>
                <div className="flex justify-center items-center gap-4 max-w-sm mx-auto">
                    <ButtonPrimary
                        disabled={page == 1}
                        text="Previous page"
                        onClick={prevPage}
                    />
                    <ButtonPrimary
                        disabled={page >= totalPages}
                        active
                        text="Next page"
                        onClick={nextPage}
                    />
                </div>
            </div>
        </>
    );
}
