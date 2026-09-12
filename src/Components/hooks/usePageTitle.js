import { useEffect } from "react";

function usePageTitle(title) {
    useEffect(() => {
        document.title = title
            ? `${title} | Serveco Group`
            : "Serveco Group";

        return () => {
            document.title = "Serveco Group";
        };
    }, [title]);
}

export default usePageTitle;