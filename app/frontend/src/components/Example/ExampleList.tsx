import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Які послуги пропонує Softengi, перелік?",
        value: "Які послуги пропонує Softengi, перелік?"
    },
    {
        text: "Які програми страхування доступні працивніку Softengi?",
        value: "Які програми страхування доступні працивніку Softengi?"
    },
    {
        text: "Дай краткую информацию о проекте Integrated Land Management information system?",
        value: "Дай краткую информацию о проекте Integrated Land Management information system?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
