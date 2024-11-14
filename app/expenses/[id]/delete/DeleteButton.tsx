"use client";

import deleteFunction from "./deleteFunction";

interface deleteButtonProps {
    buttonName: string;
    itemId: number;
}

const DeleteButton = ({ buttonName, itemId }: deleteButtonProps) => {
    return (
        <button onClick={async () => await deleteFunction(itemId)}>
            {buttonName}
        </button>
    );
};

export default DeleteButton;
