import SpinnerWhite from "./SpinnerWhite";

export default function FormSubmitButton({ disabled }: { disabled: boolean }) {
    return (
        <button
            disabled={disabled}
            type="submit"
            className={`min-w-[140px]  ${!disabled ? "bg-blue" : "bg-textGray2"}  transition   ${!disabled ? "hover:bg-blueHovered" : ""} font-medium flex flex-row items-center rounded-lg gap-3 px-3 py-2 w-full`}
        >
            <h2 className={`text-xl  text-white text-center mx-auto`}>
                <div className="flex justify-between items-center gap-3">
                    <span>Submit</span>
                    {disabled ? <SpinnerWhite /> : null}
                </div>
            </h2>
        </button>
    );
}
