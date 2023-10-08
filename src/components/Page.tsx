import { useEffect } from "react";

export function Page({
    content,
    title,
}: {
    content: JSX.Element;
    title: string;
}) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return content;
}
