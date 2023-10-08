import { useTranslation } from "react-i18next";

import { LargeLink } from "@components/LargeLink";
import { SnapSection } from "@components/SnapSection";

export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <SnapSection id="top" snap="start">
                <div className="flex flex-col items-center gap-5">
                    <h1>{t("about.title")}</h1>
                    <p>{t("about.description.part1")}</p>
                    <p>{t("about.description.part2")}</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <LargeLink
                            color="green-light"
                            link="https://github.com/ZeroWave022/personal-website"
                        >
                            {t("about.browseCode")}
                        </LargeLink>
                        <LargeLink color="green-light" link="/" internal={true}>
                            {t("common.goBack")}
                        </LargeLink>
                    </div>
                </div>
            </SnapSection>
        </>
    );
}
