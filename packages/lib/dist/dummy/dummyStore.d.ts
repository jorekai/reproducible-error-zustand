interface Props {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}
export declare const useStore: import("zustand").UseStore<Props>;
export {};
